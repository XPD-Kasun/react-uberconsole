import cx from "classnames";
import { Link } from "react-router-dom";
import { FrameworkBreadcrumbsProps } from "./types";

function FrameworkBreadcrumbs({ className, children, links, separator, currentPageName }: FrameworkBreadcrumbsProps) {

       let cls = cx({
              'breadcrumbs-area': true,
              [className]: className
       });

       return (
              <div className={cls}>
                     <div className="breadcrumb-container">
                            <div className="breadcrumb-wrap">
                                   <div className="breadcrumbs">
                                          {
                                                 links.map(link => {
                                                        return (
                                                               <div className="breadcrumb">
                                                                      <div className="breadcrumb-link">
                                                                             <Link to={link.path}>{link.name}</Link>
                                                                      </div>
                                                                      {
                                                                             separator
                                                                      }
                                                               </div>

                                                        )
                                                 })
                                          }
                                          {
                                                 <div className="breadcrumb">
                                                        <div className="breadcrumb-link current">
                                                               {currentPageName}
                                                        </div>
                                                 </div>

                                          }
                                   </div>
                            </div>
                     </div>

              </div>
       )
}

export default FrameworkBreadcrumbs;