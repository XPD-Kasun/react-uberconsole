function AppShellUI({sidebar, children}) {

       
       return (
              <div className="app-shell">
                     <div className="shell-container">
                            <div className="shell">
                                   <div className="module-navigation">
                                          {sidebar}
                                   </div>
                                   <div className="module-area">
                                          {children}
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default AppShellUI;