import { useEffect } from "react";
import NProgress from 'nprogress';

NProgress.configure({
       showSpinner: false
});

function Loader() {

       useEffect(() => {
              
              NProgress.start();

              return () => { NProgress.done(); }
       })

       return (
              <div className="module-loading-spinner">
                     <div className="spinner-container">
                            <div className="spinner-content">
                                   <div className="spinner">
                                   </div>
                            </div>
                     </div>

              </div>
       )
}



export default Loader;