import { Link, useLocation } from 'react-router-dom';
import normalizeRootPath from '../../../shared/normalizeRootPath';
import { useUberConfig } from '../../core/uberProvider';
import { ModuleLinkProps } from './types';

function ModuleLink({ module, subModule, children }: ModuleLinkProps) {

       const moduleConfig = useUberConfig();
       
       let rootPath = normalizeRootPath(moduleConfig.moduleConfig.rootPath);
       let isInRouter = false;

       try {
              let path = useLocation().pathname;
              console.log('path', path);
              if(!module){
                     let match = path.split('/')[1];                     
                     module = match;
              }
              isInRouter = true;

       } catch (e) {
              isInRouter = false;
              if(!module) {
                     console.error("ModuleLink component requires module prop to be passed when its being used outside AppShell (modules).");
                     return null;
              }
       }

       if (isInRouter) {

              return (
                     <Link to={'/'+ module + '/' + subModule}>
                            {children}
                     </Link>
              );
       }
       else {
              return (
                     <a href={rootPath + module + '/' + subModule}>{children}</a>
              );
       }

}

export default ModuleLink;