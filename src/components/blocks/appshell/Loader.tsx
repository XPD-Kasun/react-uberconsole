import { useEffect } from "react";
import NProgress from 'nprogress';
import { LoaderProps } from "./types";

NProgress.configure({
       showSpinner: false
});

function Loader({loaderElement}: LoaderProps) {

       useEffect(() => {
              
              NProgress.start();

              return () => { NProgress.done(); }
       });

       if(!loaderElement) {
              <div className="spinner">
              </div>
       }

       return (
              <div className="module-loading-spinner">
                     <div className="spinner-container">
                            <div className="spinner-content">
                                   {loaderElement}
                            </div>
                     </div>

              </div>
       )
}



export default Loader;