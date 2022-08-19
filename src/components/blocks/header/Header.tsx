import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { IoAppsSharp } from "react-icons/io5";
import { useUberConfig } from "../../core/uberProvider";

function Header({ children, showMenu, mobileMenu }) {

       let [headerHeight, setHeaderHeight] = useState(0);
       let [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
       let headerMainRef = useRef<HTMLDivElement>();

       useEffect(() => {

              setHeaderHeight(headerMainRef.current.offsetHeight);

       }, []);

       const onShowMenuClick = () => {
              setIsMobileMenuVisible(isVisible => !isVisible);
       };

       if (!showMenu) {
              showMenu = (
                     <div className="show-menu-container">
                            <div className="menu-icon">
                                   <IoAppsSharp color="#c5c5c5" size="20px" />
                            </div>
                            <div className="text">More</div>
                     </div>
              )
       }

       let showMenuCls = cx({
              'show-menu': true,
              'is-active': isMobileMenuVisible
       });


       return (
              <header className="header-main">
                     <div className="header-container" ref={headerMainRef}>
                            <div className="header-wrapper">
                                   {
                                          children
                                   }
                                   <div className={showMenuCls} onClick={onShowMenuClick}>
                                          {showMenu}
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