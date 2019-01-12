import React from "react";

import { Tab } from "../Tab/tab";

interface ITabMenu {
    themes: string[];
    activeTab: number;
    onTabClick: (id: number) => void;
}

export const TabMenu: React.SFC<ITabMenu> = ({ themes, activeTab, onTabClick }): JSX.Element => {
    return (
        <div className="tab-menu">
            {themes.map((tabItem, index) => {
                return (
                    <Tab tabItem={tabItem} activeTab={activeTab} index={index} onTabClick={onTabClick} key={index} />
                );
            })}
        </div>
    );
};