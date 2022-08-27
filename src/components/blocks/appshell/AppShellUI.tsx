import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import getModuleInfoFromPath from "../../../shared/getModuleInfoFromPath";

function AppShellUI({ sidebar, height, children, onMobileSidebarBtn, onClick, isSidebarOpen, moduleConfig }) {

       let path = useLocation().pathname;
       let moduleInfo = getModuleInfoFromPath(moduleConfig, path);

       let hideSidebar = false;

       if (moduleInfo) {

              if (moduleInfo.module && moduleInfo.module.sidebar !== undefined) {
                     sidebar = moduleInfo.module.sidebar;
              }
              if (moduleInfo.subModule) {
                     hideSidebar = moduleInfo.subModule.hideSidebar;

              }
              if (moduleInfo.module && !moduleInfo.subModule) {
                     let homeSubModule = moduleInfo.module.subModules.find(x => x.path === '/');
                     if (homeSubModule) {
                            hideSidebar = homeSubModule.hideSidebar;
                     }

              }
       }

       return (
              <div className="app-shell" style={{ height }} onClick={onClick}>
                     <div className="mobile-sidebar">
                            <div className="menubtn-container">
                                   <div className="menu-btn" onClick={onMobileSidebarBtn}>
                                          {
                                                 isSidebarOpen ? (
                                                        <IoMenuOutline color="#FFF" size="20px"></IoMenuOutline>
                                                 ) : (
                                                        <IoCloseOutline color="#FFF" size="20px"></IoCloseOutline>
                                                 )
                                          }

                                   </div>
                            </div>
                     </div>
                     <div className="shell-container">
                            <div className="shell">
                                   <div className="module-navigation">
                                          {hideSidebar ? "" : sidebar}
                                   </div>
                                   <div className="module-area" style={{ height }}>
                                          {children}
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default AppShellUI;