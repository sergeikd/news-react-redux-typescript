import React from "react";

import { Tab } from "./Tab";
import Select from "./Select";
import Search from "./Search";
import Sort from "./Sort";

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
            <Search />
            <Select />
            <Sort />
        </div>
    );
};