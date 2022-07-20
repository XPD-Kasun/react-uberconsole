import { useMemo, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getItemList from "../../../shared/getItemList";
import AppShellUI from "./AppShellUI";
import Loader from "./Loader";
import Sidebar, { SidebarNavigationSection, SidebarNavigationSectionInternal } from "./Sidebar";
import { AppShellProps } from "./types";

function getSuspensedComponent(Component) {
       return (
              <Suspense fallback={<Loader></Loader>}>
                     <Component></Component>
              </Suspense>
       );
}


function AppShell({ moduleConfig, children, sidebar: CustomSidebar, sidebarMaxHeight="calc(100vh - var(--footer-min-height))" }: AppShellProps) {

       let [isSidebarCollapse, setIsSidebarCollapse] = useState(false);

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
              <Router>
                     <AppShellUI sidebar={sidebar}>
                            <Routes>
                                   {
                                          moduleConfig.modules.map(m => {

                                                 let suspensed = null;

                                                 if (m.layout) {
                                                        suspensed = getSuspensedComponent(m.layout);
                                                 }
                                                 else if (m.subModules[0].component) {
                                                        suspensed = getSuspensedComponent(m.subModules[0].component);
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
                                                                                    getSuspensedComponent(subModule.component)
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