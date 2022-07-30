

function FrameworkSnap({ className = "snap", header, children }) {

       return (
              <div className={className}>
                     <div className="header">
                            <div className="header-container">
                                   {
                                          header
                                   }
                            </div>
                     </div>
                     {
                            children && (
                                   <div className="content">
                                          {
                                                 children
                                          }
                                   </div>
                            )
                     }
              </div>
       )
}

export default FrameworkSnap;