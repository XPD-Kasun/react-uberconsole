import cx from "classnames";
import { Link } from "react-router-dom";
import { FrameworkBreadcrumbsProps } from "./types";

function FrameworkBreadcrumbs({ className, children, links, separator }: FrameworkBreadcrumbsProps) {

       let cls = cx({
              'breadcrumbs-area': true,
              [className]: className
       });

       let lastLink = links[links.length - 1];
       links = (links.length > 1) ? links.slice(0, links.length - 1) : [];

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
                                                               {lastLink.name}
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