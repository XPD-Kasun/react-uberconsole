import { Module, ModuleConfig, SubModule } from "../types";

const cache = {};

export default function getModuleInfoFromPath(moduleConfig: ModuleConfig, path: string): {
       module: Module,
       subModule: SubModule,
       basePath: string
} {

       let cachedItem = cache[path];

       if (cachedItem) {
              console.log('module info from cache, ', cache);
              return cachedItem;
       }

       let segments = path.split('/');
       let module = null, subModule = null;

       if (segments.length > 2) {
              cachedItem = cache['/' + segments[1] + '/' + segments[2]];
              if (cachedItem) {
                     console.log('module info from cache, ', cache);
                     return cachedItem;
              }

       }

       if (segments.length > 1) {

              let moduleNameFromSegment = '/' + segments[1].toLowerCase().trim();

              for (let m of moduleConfig.modules) {

                     if (m.path === moduleNameFromSegment) {

                            module = m;

                            if (segments.length > 2) {

                                   let subModuleName = '/' + segments[2].toLowerCase().trim();

                                   for (let s of m.subModules) {
                                          if (s.path === subModuleName) {
                                                 subModule = s;
                                                 break;
                                          }
                                   }

                            }
                            break;
                     }
              }

       }

       let moduleInfo = {
              basePath: moduleConfig.rootPath || '/',
              module,
              subModule
       };

       if (module || subModule) {
              cache[path] = moduleInfo;
       }

       return moduleInfo;

}