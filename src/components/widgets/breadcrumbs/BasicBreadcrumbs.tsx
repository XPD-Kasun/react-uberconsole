import { IoChevronForwardOutline } from "react-icons/io5";
import FrameworkBreadcrumbs from "./FrameworkBreadcrumbs";
import { useLocation } from 'react-router-dom';
import { useUberConfig } from "../../core/uberProvider";

function BasicBreadcrumbs() {

       let path = useLocation().pathname;
       let config = useUberConfig().moduleConfig;

       let parts = path.split('/');
       let links = [];

       links.push({
              path: `/`,
              name: 'Home'
       });

       if (parts.length > 1) {

              let module = config.modules.find(x => x.path == '/' + parts[1]);

              links.push({
                     path: module.path,
                     name: module.name
              });

              if(parts.length > 2) {
                     
                     let submodule = module.subModules.find(x => x.path == parts[2]);

                     links.push({
                            path: `${module.path}/${submodule.path}`,
                            name: submodule.name
                     });

              }
       }

       return (
              <FrameworkBreadcrumbs links={links} separator={<div className="sep"><IoChevronForwardOutline size="18px" color="#bbb"></IoChevronForwardOutline></div>}></FrameworkBreadcrumbs>
       );
}

export default BasicBreadcrumbs;