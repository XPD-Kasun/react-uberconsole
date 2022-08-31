import cx from "classnames";
import { Box } from "../../core/box";
import { FrameworkSnapProps } from "./types";

function FrameworkSnap({ className, header, children, hasPadding=true }: FrameworkSnapProps) {

       let cls = cx({
              "snap": true,
              "has-padding": hasPadding,
              [className]: className
       });


       return (
              <Box>
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
              </Box>
       )
}

export default FrameworkSnap;