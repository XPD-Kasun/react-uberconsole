import React, { useMemo, Suspense, lazy, useState, MouseEvent } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import normalizeRootPath from "../../../shared/normalizeRootPath";
import { ErrorBoundary } from "../../core/errorBoundary";
import { useUberConfig } from "../../core/uberProvider";
import AppShellUI from "./AppShellUI";
import Loader from "./Loader";
import Sidebar, { SidebarNavigationSection } from "./Sidebar";
import breakPoints from '../../../shared/breakPoints';
import { AppShellProps } from "./types";
import isBrowser from "../../../shared/isBrowser";

function BasicError() {
       return (
              <div className="page-container">
                     <div className="page-title">Something went wrong</div>
                     <p>We are working to fix the problem.</p>
              </div>
       )
};

function getSuspensedComponent(Component, ErrorUI) {

       if (!ErrorUI) {
              ErrorUI = BasicError;
       }

       return (
              <ErrorBoundary errorUI={<ErrorUI></ErrorUI>} logErrors={true}>
                     <Suspense fallback={<Loader></Loader>}>
                            <Component></Component>
                     </Suspense>
              </ErrorBoundary>
       );
}


function AppShell({ children, sidebar: CustomSidebar, height }: AppShellProps) {

       if(!isBrowser()) {
              return null
       }
       
       let isMobile = isBrowser() ? window.innerWidth < breakPoints.tabWidth : false;

       let moduleConfig = useUberConfig().moduleConfig;
       let [isSidebarCollapse, setIsSidebarCollapse] = useState(isMobile);

       let rootPath = normalizeRootPath(moduleConfig.rootPath);

       const onSidebarCollapse = (evt) => {
              setIsSidebarCollapse(isCollapsed => !isCollapsed);
       };

       const onAppShellClick = (evt) => {

              let target: HTMLDivElement = evt.target;

              if (isMobile && evt.target.nodeName == 'A' && target.parentElement.classList.contains("sidebar-label")) {
                     onSidebarCollapse(evt);
              }

       };

       let appShellHeight = useMemo(() => {

              if (height.toString().indexOf('calc') > -1) {

                     return height.toString().replace(')', ' - var(--mobile-menu-height))');
              }

              return height;

       }, [height]);


       let sidebar = useMemo(() => {

              return (
                     <Sidebar maxHeight={appShellHeight} isCollapsed={isSidebarCollapse} onCollapseClick={onSidebarCollapse}>
                            {
                                   !CustomSidebar && <SidebarNavigationSection />
                            }
                            {
                                   CustomSidebar
                            }
                     </Sidebar>
              );
       }, [moduleConfig, isSidebarCollapse, CustomSidebar, appShellHeight]);

       let landingPath = useMemo(() => {

              let defaultModule = moduleConfig.modules[0];

              for (const module of moduleConfig.modules) {

                     if (module.isDefault) {
                            defaultModule = module;
                            break;
                     }
              }

              let path = defaultModule.path;

              if (defaultModule.subModules && defaultModule.subModules.length > 0) {

                     let homeSubModule = defaultModule.subModules.find(x => x.path === '/');
                     if (!homeSubModule) {
                            path += defaultModule.subModules[0].path;
                     }
              }

              return path;

       }, [moduleConfig]);

       return (
              <Router basename={rootPath}>
                     <AppShellUI
                            moduleConfig={moduleConfig}
                            isSidebarOpen={isSidebarCollapse}
                            onClick={onAppShellClick}
                            sidebar={sidebar}
                            height={appShellHeight}
                            onMobileSidebarBtn={(evt) => onSidebarCollapse(evt)}
                     >
                            <Routes>
                                   {
                                          (landingPath !== '/') && (
                                                 <Route path="/" element={<Navigate to={landingPath} />}></Route>
                                          )
                                   }
                                   {
                                          moduleConfig.modules.map((m, i) => {

                                                 let suspensed = null;

                                                 if (m.layout) {
                                                        suspensed = getSuspensedComponent(m.layout, moduleConfig.moduleErrorComponent);
                                                 }
                                                 else {
                                                        suspensed = <Outlet />;
                                                 }
                                                 return (

                                                        <Route key={m.id || i} path={m.path} element={suspensed}>
                                                               {
                                                                      m.subModules.map(subModule => {

                                                                             let suspendedSubModule =
                                                                                    getSuspensedComponent(subModule.component, moduleConfig.moduleErrorComponent);

                                                                             let subModulePath = subModule.path.substring(1);

                                                                             if (subModule.hasInternalRoutes) {
                                                                                    if (!subModulePath.endsWith('/')) {
                                                                                           subModulePath += '/';
                                                                                    }
                                                                                    subModulePath += '*';
                                                                             }

                                                                             return (
                                                                                    <Route
                                                                                           key={subModule.id}
                                                                                           path={subModulePath}
                                                                                           element={suspendedSubModule}
                                                                                    />

                                                                             )
                                                                      })
                                                               }
                                                        </Route>
                                                 );

                                          })
                                   }
                            </Routes>
                     </AppShellUI>
              </Router >
       );

}

export default AppShell;