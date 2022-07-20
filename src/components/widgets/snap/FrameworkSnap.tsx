

function FrameworkSnap({ className = "snap", header, content, children }) {


       return (
              <div className={className}>
                     <div className="header">
                            <div className="header-container">
                                   {
                                          header
                                   }
                            </div>
                     </div>
                     <div className="content">
                            {
                                   content
                            }
                     </div>
              </div>
       )
}

export default FrameworkSnap;