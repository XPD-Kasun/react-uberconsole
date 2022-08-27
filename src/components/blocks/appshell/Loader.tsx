import { useEffect } from "react";
import cx from "classnames";
import NProgress from 'nprogress';
import { LoaderProps } from "./types";

NProgress.configure({
       showSpinner: false
});

function Loader({children, className}: LoaderProps) {

       useEffect(() => {
              
              NProgress.start();

              return () => { NProgress.done(); }
       });

       if(!children) {
              <div className="spinner">
              </div>
       }

       let cls = cx({
              "module-loading-spinner": true,
              [className]: className
       })

       return (
              <div className={cls}>
                     <div className="spinner-container">
                            <div className="spinner-content">
                                   {children}
                            </div>
                     </div>

              </div>
       )
}



export default Loader;