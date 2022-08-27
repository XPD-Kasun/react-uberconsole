import cx from "classnames";
import { FrameworkSnapProps } from "./types";

function FrameworkSnap({ className, header, children }: FrameworkSnapProps) {

       let cls = cx({
              "snap": true,
              [className]: className
       });


       return (
              <div className={cls}>
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