import { Link, useLocation } from 'react-router-dom';
import { IoCaretDown, IoChevronBack } from 'react-icons/io5';
import { SidebarItem, SNSIP, SidebarNavigationSectionProps } from "./types";
import { useState } from 'react';
import getItemList from '../../../shared/getItemList';
import cx from 'classnames';


function Sidebar({ className = "sidebar", isCollapsed, children, maxHeight, onCollapseClick }) {

       console.log(isCollapsed)
       if (isCollapsed) {
              className += ' collapsed';
       }

       const _onCollapseClick = (evt) => {
              onCollapseClick && onCollapseClick(evt);
       };

       return (
              <aside className={className} style={{maxHeight: maxHeight}}>
                     <div className="close-btn" onClick={_onCollapseClick}>
                            <IoChevronBack></IoChevronBack>
                     </div>
                     <div className="sidebar-wrapper">
                            <div className="sidebar-container">
                                   {children}
                            </div>
                     </div>
              </aside>
       )

}

function SidebarItem({ item }: { item: SidebarItem }) {

       let [isCollapse, setIsCollapse] = useState(false);
       let location = useLocation();

       let hasSubmenus = item.subItems && item.subItems.length > 0;

       let collapseClass = "collapse";

       if (isCollapse) {
              collapseClass += ' active';
       }

       const onCollapseClick = () => {
              setIsCollapse(collapsed => !collapsed);
       };

       return (
              <div className="sidebar-item">
                     <div className="sidebar-label" onClick={onCollapseClick}>
                            {
                                   hasSubmenus &&
                                   <div className={collapseClass}>
                                          <IoCaretDown color="#555" size={12} />
                                   </div>
                            }
                            <div className="text">
                                   {item.hasLayout && <Link to={item.path}>{item.name}</Link>}
                                   {!item.hasLayout && item.name}
                            </div>
                     </div>
                     {
                            hasSubmenus && !isCollapse && (
                                   <div className="subitem-list-container">
                                          <ul className="subitem-list">
                                                 {
                                                        item.subItems
                                                               .sort((x, y) => (x.order > y.order) ? 1 : -1).map((y) => {

                                                                      let isActiveRoute = location.pathname === y.path;

                                                                      return (
                                                                             <li className={"submenu-list-item" + ((isActiveRoute) ? ' active' : '')}>
                                                                                    <div className="submenu-item">
                                                                                           {

                                                                                                  y.path && (
                                                                                                         <Link to={y.path}>
                                                                                                                {y.name}
                                                                                                         </Link>
                                                                                                  )

                                                                                           }
                                                                                           {
                                                                                                  !y.path && y.name
                                                                                           }
                                                                                    </div>
                                                                             </li>
                                                                      )
                                                               })
                                                 }
                                          </ul>
                                   </div>
                            )
                     }
              </div>
       )


}

export function SidebarNavigationSectionInternal({ className = "sidebar-section", itemList }: SNSIP) {


       return (
              <div className={className} style={{flex: 1, overflow: 'auto'}}>
                     <ul className="sidebar-list">
                            {
                                   itemList.map(x => {
                                          return <SidebarItem item={x}></SidebarItem>
                                   })
                            }
                     </ul>
              </div>
       )
}


export function SidebarNavigationSection({ className = "sidebar-section", config }: SidebarNavigationSectionProps) {

       let itemList = getItemList(config);

       return (
              <SidebarNavigationSectionInternal className={className} itemList={itemList}></SidebarNavigationSectionInternal>
       )
}


export function CustomSidebarSection({ className, style, children}) {

       let cls = cx({
              "sidebar-section": true,
              [className]: className
       });

       return (
              <div className={cls} style={style}>
                     {
                            children
                     }

              </div>
       )

}

export default Sidebar;