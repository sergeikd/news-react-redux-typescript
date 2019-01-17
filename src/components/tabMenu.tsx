import React from "react";

import { Tab } from "./Tab";
import Select from "./Select";

interface ITabMenu {
    themes: string[];
    activeTab: number;
    onTabClick: (id: number) => void;
}

export const TabMenu: React.FC<ITabMenu> = ({ themes, activeTab, onTabClick }): JSX.Element => {
    return (
        <div className="tab-menu">
            {themes.map((tabItem, index) => {
                return (
                    <Tab tabItem={tabItem} activeTab={activeTab} index={index} onTabClick={onTabClick} key={index} />
                );
            })}
            <Select />
        </div>
    );
};