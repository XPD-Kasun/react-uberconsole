import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from "classnames";
import getModuleInfoFromPath from '../../../shared/getModuleInfoFromPath';
import normalizeRootPath from '../../../shared/normalizeRootPath';
import { useUberConfig } from '../../core/uberProvider';
import { ModuleLinkProps } from './types';

function ModuleLink({ module, subModule = '', children, className, queryString, hash }: ModuleLinkProps) {

       const moduleConfig = useUberConfig().moduleConfig;

       let cls = cx({
              'module-link': true,
              [className]: className
       });

       if (!moduleConfig) {
              throw new Error('moduleConfig is null. ModuleLink component should be used inside of an UberProvider. Have you wrapped your app with UberProvider')
       }

       let rootPath = normalizeRootPath(moduleConfig.rootPath);;
       let isInRouter = false;

       try {
              let path = useLocation().pathname;
              if (!module) {
                     let moduleInfo = getModuleInfoFromPath(moduleConfig, path);
                     module = moduleInfo.module.path;

                     if (!subModule) {
                            subModule = moduleInfo.subModule.name;
                     }
              }
              isInRouter = true;

       } catch (e) {
              isInRouter = false;
              if (!module) {
                     console.error("ModuleLink component requires module prop to be passed when its being used outside AppShell (modules).");
                     return null;
              }
       }

       if (module.startsWith('/')) module = module.substring(1);
       if (subModule && !subModule.startsWith('/')) subModule = '/' + subModule;

       let qs = queryString?.toString();
       let modulePath = `${rootPath}${module}${subModule}`;
       if (qs) {
              modulePath += '?' + qs;
       }
       if (hash) {
              modulePath += '#' + hash;
       }


       if (isInRouter) {

              return (
                     <Link className={cls} to={modulePath}>
                            {children}
                     </Link>
              );
       }
       else {
              return (
                     <a className={cls} href={modulePath}>{children}</a>
              );
       }

}

export default React.memo(ModuleLink);