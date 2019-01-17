import React from "react";

interface ITab {
    tabItem: string;
    activeTab: number;
    index: number;
    onTabClick: (id: number) => void;
}

export const Tab: React.FC<ITab>  = ({ tabItem, activeTab, index, onTabClick }): JSX.Element => {
    return (
        <button className={activeTab === index ? "tab active" : "tab"}
            key={index}
            onClick={() => onTabClick(index)}>
            {tabItem}
        </button>
    );
};