import { useMemo, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getItemList from "../../../shared/getItemList";
import normalizeRootPath from "../../../shared/normalizeRootPath";
import { ErrorBoundary } from "../../core/errorBoundary";
import { useUberConfig } from "../../core/uberProvider";
import AppShellUI from "./AppShellUI";
import Loader from "./Loader";
import Sidebar, { SidebarNavigationSection, SidebarNavigationSectionInternal } from "./Sidebar";
import { AppShellProps } from "./types";

function BasicError() {
       return (
              <div>
                     <h2 style={{ textAlign: 'center' }}>An Error Has Occured</h2>
                     <h5 style={{ textAlign: 'center' }}>Something went wrong</h5>
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


function AppShell({ children, sidebar: CustomSidebar, sidebarMaxHeight = "calc(100vh - var(--footer-min-height))" }: AppShellProps) {

       let [isSidebarCollapse, setIsSidebarCollapse] = useState(false);
       let moduleConfig = useUberConfig().moduleConfig;

       let rootPath = normalizeRootPath(moduleConfig.rootPath);

       const onSidebarCollapse = (evt) => {
              setIsSidebarCollapse(isCollapsed => !isCollapsed);
       };

       let sidebar = useMemo(() => {

              let itemList = getItemList(moduleConfig);

              return (
                     <Sidebar maxHeight={sidebarMaxHeight} isCollapsed={isSidebarCollapse} onCollapseClick={onSidebarCollapse}>
                            {
                                   !CustomSidebar && <SidebarNavigationSectionInternal itemList={itemList} />
                            }
                            {
                                   CustomSidebar
                            }
                     </Sidebar>
              );
       }, [moduleConfig, isSidebarCollapse, CustomSidebar]);


       return (
              <Router basename={rootPath}>
                     <AppShellUI sidebar={sidebar}>
                            <Routes>
                                   {
                                          moduleConfig.modules.map(m => {

                                                 let suspensed = null;

                                                 if (m.layout) {
                                                        suspensed = getSuspensedComponent(m.layout, moduleConfig.moduleErrorComponent);
                                                 }
                                                 else if (m.subModules[0].component) {
                                                        suspensed = getSuspensedComponent(m.subModules[0].component, moduleConfig.moduleErrorComponent);
                                                 }
                                                 else {
                                                        suspensed = (
                                                               <div className="module-not-found">
                                                                      {moduleConfig.moduleErrorComponent}
                                                               </div>
                                                        );
                                                 }
                                                 return (

                                                        <Route path={m.path} element={suspensed}>
                                                               {
                                                                      m.subModules.map(subModule => {

                                                                             let suspendedSubModule =
                                                                                    getSuspensedComponent(subModule.component, moduleConfig.moduleErrorComponent)
                                                                             return (
                                                                                    <Route
                                                                                           path={subModule.path}
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