import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { IoAppsSharp } from "react-icons/io5";
import { useUberConfig } from "../../core/uberProvider";
import { HeaderProps } from "./types";

function Header({ className, children, mobileMenuToggle, mobileMenu }: HeaderProps) {

       let [headerHeight, setHeaderHeight] = useState(0);
       let [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
       let headerMainRef = useRef<HTMLDivElement>();

       useEffect(() => {

              setHeaderHeight(headerMainRef.current.offsetHeight);

       }, []);

       const onShowMenuClick = () => {
              setIsMobileMenuVisible(isVisible => !isVisible);
       };

       if (!mobileMenuToggle) {
              mobileMenuToggle = (
                     <div className="show-menu-container">
                            <div className="menu-icon">
                                   <IoAppsSharp color="#c5c5c5" size="20px" />
                            </div>
                            <div className="text">More</div>
                     </div>
              )
       }

       let cls = cx({
              "header-container": true,
              [className]: className
       });

       let showMenuCls = cx({
              'show-menu': true,
              'is-active': isMobileMenuVisible
       });


       return (
              <header className="header-main">
                     <div className={cls} ref={headerMainRef}>
                            <div className="header-wrapper">
                                   {
                                          children
                                   }
                                   <div className={showMenuCls} onClick={onShowMenuClick}>
                                          {mobileMenuToggle}
                                   </div>
                            </div>
                     </div>
                     {
                            isMobileMenuVisible && (
                                   <div className="mobile-menu-area" style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}>
                                          {mobileMenu}
                                   </div>
                            )
                     }
              </header>
       );

}

export default Header;