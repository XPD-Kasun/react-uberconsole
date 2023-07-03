import { IoChevronForwardOutline } from "react-icons/io5";
import FrameworkBreadcrumbs from "./FrameworkBreadcrumbs";
import { useLocation } from 'react-router-dom';
import { useUberConfig } from "../../core/uberProvider";
import getModuleInfoFromPath from "../../../shared/getModuleInfoFromPath";
import { BreadcrumbLink } from "./types";
import { useMemo } from "react";

function makeReadable(link: string) {

       if (link.length > 1) {
              link = link[0].toUpperCase() + link.substring(1);
       }
       link = link.replace(/-/g, ' ');

       return link;
}

function BasicBreadcrumbs() {

       let path = '';

       try {
              path = useLocation().pathname;
       }
       catch (e) {
              throw Error("BasicBreadcrumbs cannot be used outside AppShell");
       }

       let config = useUberConfig().moduleConfig;
       let moduleInfo = getModuleInfoFromPath(config, path);

       console.log(moduleInfo)

       if (!moduleInfo || !moduleInfo.module) {
              return null;
       }

       let breadcrumbLinkSet = useMemo(() => {

              let parts = path.split('/');
              let currentPage = '';
       
              let links: BreadcrumbLink[] = [{
                     name: moduleInfo.module.name,
                     path: moduleInfo.module.path
              }];
       
              if (moduleInfo.subModule) {
       
                     if (parts.length > 3) {
                            links.push({
                                   name: moduleInfo.subModule.name,
                                   path: moduleInfo.module.path + moduleInfo.subModule.path
                            });
                     }
                     else {
                            currentPage = moduleInfo.subModule.name;
                     }
              }
              else {
                     links = [];
                     currentPage = moduleInfo.module.name;
              }
       
              if (parts.length > 3) {
                     let modulepath = `/${parts[1]}/${parts[2]}/`;
                     parts.splice(0, 3);
                     currentPage = makeReadable(parts[parts.length - 1]);
                     parts.splice(parts.length - 1, 1);
       
                     parts.forEach((part, i) => {
                            links.push({
                                   name: makeReadable(part),
                                   path: modulepath + parts.slice(0, i + 1).join('/')
                            });
                     })
              }

              return {
                     links,
                     currentPage
              }

       }, [path, config]);



       return (
              <FrameworkBreadcrumbs 
                     links={breadcrumbLinkSet.links} 
                     currentPageName={breadcrumbLinkSet.currentPage} 
                     separator={
                            <div className="sep">
                                   <IoChevronForwardOutline size="18px" color="#bbb"></IoChevronForwardOutline>
                            </div>
                     }>
              </FrameworkBreadcrumbs>
       );
}

export default BasicBreadcrumbs;