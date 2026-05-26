import { App, Modal, MarkdownRenderer, Component } from "obsidian";
import { createRoot, Root } from "react-dom/client";
import * as React from "react";

import type FastSync from "../main";
import { dumpError } from "../lib/helps";
import { showSyncNotice } from "../lib/helps";
import { $ } from "../i18n/lang";
import { LucideIcon } from "./note-history/lucide-icon";


/**
 * 版本信息及升级弹窗
 */
export class AboutModal extends Modal {
    private root: Root | null = null;

    constructor(app: App, private plugin: FastSync, private type: 'plugin' | 'server') {
        super(app);
    }

    onOpen() {
        const { contentEl } = this;
        this.containerEl.addClass("fns-about-modal-container");
        this.titleEl.setText(this.type === 'plugin' ? "插件版本" : "服务器版本");

        this.root = createRoot(contentEl);
        this.root.render(
            <AboutView plugin={this.plugin} type={this.type} closeModal={() => this.close()} />
        );
    }

    onClose() {
        this.containerEl.removeClass("fns-about-modal-container");
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }
        this.contentEl.empty();
    }
}

const AboutView = ({ plugin, type, closeModal }: { plugin: FastSync; type: 'plugin' | 'server'; closeModal: () => void }) => {
    const [isUpgrading, setIsUpgrading] = React.useState(false);
    const [upgradeStatus, setUpgradeStatus] = React.useState("");

    const versionData = React.useMemo(() => plugin.versionManager.getVersionData(), [plugin]);
    const { plugin: pluginInfo, server: serverInfo } = versionData;

    const pluginCurrent = pluginInfo.current;
    const pluginNew = pluginInfo.latest;
    const pluginIsNew = pluginInfo.isNew;
    const pluginNewChangelog = pluginInfo.newChangelog;
    const pluginCurrentChangelog = pluginInfo.currentChangelog;

    const serverCurrent = serverInfo.current;
    const serverNew = serverInfo.latest;
    const serverIsNew = serverInfo.isNew;
    const serverNewChangelog = serverInfo.newChangelog;
    const serverCurrentChangelog = serverInfo.currentChangelog;
    const serverBaseChangelog = serverInfo.baseChangelog;

    const [isAdmin, setIsAdmin] = React.useState(false);
    const abortControllerRef = React.useRef<AbortController | null>(null);
    const isMounted = React.useRef(true);

    React.useEffect(() => {
        isMounted.current = true;
        abortControllerRef.current = new AbortController();
        return () => {
            isMounted.current = false;
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    React.useEffect(() => {
        if (type === 'server') {
            void plugin.api.checkAdmin(abortControllerRef.current?.signal).then(res => {
                if (isMounted.current) setIsAdmin(res);
            });
        }
    }, [type, plugin.api]);

    const handleUpgrade = async () => {
        setIsUpgrading(true);
        try {
            await plugin.versionManager.upgradeServer((status) => {
                if (isMounted.current) setUpgradeStatus(status);
            }, abortControllerRef.current?.signal);
            
            if (isMounted.current) setUpgradeStatus("");
        } catch (e) {
            dumpError("Upgrade server error:", e);
            showSyncNotice($("ui.version.upgrade_fail") + ": " + (e instanceof Error ? e.message : String(e)));
        } finally {
            if (isMounted.current) setIsUpgrading(false);
        }
    };

    const handlePluginUpgrade = async () => {
        setIsUpgrading(true);
        try {
            await plugin.versionManager.upgradePlugin((status) => {
                if (isMounted.current) setUpgradeStatus(status);
            }, abortControllerRef.current?.signal);

            if (isMounted.current) {
                closeModal();
            }
        } catch (e) {
            dumpError("Upgrade plugin error:", e);
            showSyncNotice($("ui.version.upgrade_fail") + ": " + (e instanceof Error ? e.message : String(e)));
        } finally {
            if (isMounted.current) setIsUpgrading(false);
        }
    };

    return (
        <div className="fns-about-view">
            <div className="fns-version-section">
                {type === 'plugin' && (
                    <VersionItem
                        title="Fast Note Sync For Obsidian"
                        isPlugin={true}
                        current={pluginCurrent}
                        latest={pluginIsNew ? pluginNew : pluginCurrent}
                        isNew={pluginIsNew}
                        changelog={pluginNewChangelog || pluginCurrentChangelog}
                        canUpgrade={pluginIsNew}
                        onUpgrade={() => { void handlePluginUpgrade(); }}
                        isUpgrading={isUpgrading}
                        status={upgradeStatus}
                        app={plugin.app}
                    />
                )}

                {type === 'server' && (
                    <VersionItem
                        title="Fast Note Sync Service"
                        isPlugin={false}
                        current={serverCurrent || "0.0.0"}
                        latest={serverIsNew ? serverNew : serverCurrent}
                        isNew={serverIsNew}
                        changelog={serverNewChangelog || serverCurrentChangelog || serverBaseChangelog}
                        canUpgrade={serverIsNew && isAdmin}
                        onUpgrade={() => { void handleUpgrade(); }}
                        isUpgrading={isUpgrading}
                        status={upgradeStatus}
                        app={plugin.app}
                    />
                )}
            </div>
        </div>
    );
};

const VersionItem = ({
    title, current, latest, isNew, changelog, canUpgrade, onUpgrade, isUpgrading, status, isPlugin, app
}: {
    title: string; current: string; latest: string; isNew: boolean; changelog?: string;
    canUpgrade?: boolean; onUpgrade?: () => void; isUpgrading?: boolean; status?: string; isPlugin: boolean;
    app: App;
}) => {
    const changelogRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (changelog && changelogRef.current) {
            const component = new Component();
            void MarkdownRenderer.render(
                app,
                changelog,
                changelogRef.current,
                "",
                component
            );
        }
    }, [changelog, app]);

    return (
        <div className="fns-version-item">
            <div className="fns-version-header">
                <h3>{title}</h3>
                {isNew && <span className="fns-tag fns-tag-new">New</span>}
            </div>

            <div className="fns-version-info">
                <div className="fns-version-row fns-version-row-between">
                    <div className="fns-version-left">
                        <span>{$("ui.version.current")}:</span>
                        <span className="fns-version-number">v{current}</span>
                    </div>

                    {isNew ? (
                        <div className="fns-version-right">
                            <span>{$("ui.version.latest")}:</span>
                            <span className="fns-version-number fns-new-v">v{latest}</span>
                        </div>
                    ) : (
                        !canUpgrade && (
                            <div className="fns-version-uptodate">
                                <span className="fns-icon-check">✓</span> {$("ui.version.up_to_date")}
                            </div>
                        )
                    )}
                </div>
            </div>

            {changelog && (
                <div className="fns-changelog-container">
                    <div ref={changelogRef} className="fns-changelog-content markdown-rendered" />
                </div>
            )}

            {canUpgrade && (
                <div className="fns-upgrade-actions">
                    <button
                        className={`fns-upgrade-btn ${isUpgrading ? 'is-loading' : 'mod-cta'}`}
                        disabled={isUpgrading}
                        onClick={onUpgrade}
                    >
                        <LucideIcon 
                            icon={isUpgrading ? "refresh-cw" : "arrow-up-circle"} 
                            size={16} 
                            className={isUpgrading ? "is-spinning" : ""} 
                        />
                        {isUpgrading ? status : (isPlugin ? $("ui.version.upgrade_plugin") : $("ui.version.upgrade_server"))}
                    </button>
                </div>
            )}

        </div>
    );
};
