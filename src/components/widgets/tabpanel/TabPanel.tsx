import React, { useEffect, useState } from "react";
import FrameworkSnap from "../snap/FrameworkSnap";
import { TabPanelProps } from "./types";
import TabPage from "./TabPage";
import { ReactChildren } from "../../../types";

type TabComponent = {
       title: string,
       content: ReactChildren
};

type TabComponentMap = {
       [id: number]: TabComponent
};

function getTabId(title) {
       return title.replace(' ', '').trim();
}

function getHeaderTabs(componentMap: TabComponentMap, onTabSelect, currentlySelectedTab) {

       return (
              <div className="tab-set">
                     {
                            Object.keys(componentMap).map(id => {

                                   let cls = "tab-container";
                                   if(id == currentlySelectedTab) {
                                          cls += ' is-active';
                                   }

                                   return (
                                          <div className={cls} onClick={evt => onTabSelect(id)}>
                                                 <div className="tab">{componentMap[id].title}</div>
                                          </div>
                                   );
                            })
                     }
              </div>
       )

}

function TabPanel({ children }: TabPanelProps) {

       let childrenAr = React.Children.toArray(children);
       let componentMap: TabComponentMap = {};

       childrenAr.forEach((child: JSX.Element, i: number) => {
              if (child.type == TabPage) {

                     componentMap[i] = {
                            title: child.props.title,
                            content: child.props.children
                     };
              }
       });


       let [selectedTab, setSelectedTab] = useState<{id: number, content: ReactChildren}>({
              id: 0,
              content: componentMap[0].content
       });

       useEffect(() => {
              console.log('rr')
              setSelectedTab({
                     content: componentMap[selectedTab.id].content,
                     id: selectedTab.id
              });

       }, [children]);

       const onTabSelect = (id) => {

              setSelectedTab({
                     content: componentMap[id].content,
                     id
              });
       };


       return (
              <FrameworkSnap header={getHeaderTabs(componentMap, onTabSelect, selectedTab.id)} className="tabpanel">
                     {
                            selectedTab.content
                     }
              </FrameworkSnap>
       )

}

export default TabPanel; 