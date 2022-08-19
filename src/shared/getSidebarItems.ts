import { ModuleConfig, SidebarItem, SidebarItemType, SubModule } from "../types";

export interface SidebarItemWithModules extends SidebarItem {
       subModule?: SubModule
}



function mapSubModuleRecursive(item, submoduleMap, module): SidebarItemWithModules {

       if (item.type === SidebarItemType.submodule) {
              let subModule = submoduleMap[item.subModuleId ?? ''];

              if (!subModule) {
                     return null;
              }

              let newItem = {
                     ...item,
                     text: item.text || subModule?.name,
                     url: module.path + subModule?.path,
                     subModule
              };

              newItem.url = newItem.url.replace('//', '/');

              return newItem;
       }
       else if (item.type === SidebarItemType.group) {

              return {
                     ...item,
                     items: item.items?.map(item => mapSubModuleRecursive(item, submoduleMap, module))
              };
       }

       return item;
}

let getSidebarItems = (function() {

       let cache = {};

       function getSidebarItems(module): SidebarItemWithModules[] {

              if (!module) {
                     return null;
              }

              let cachedSidebarItems = cache[module.path];

              if(cachedSidebarItems) {
                     console.log('cached sidebar items, ', cachedSidebarItems);
                     return cachedSidebarItems;
              }

              let submoduleMap = [];

              module.subModules.forEach(s => {
                     submoduleMap[s.id] = s;
              });

              let mappedSidebarItems = module.sidebarConfig.items.map(item => mapSubModuleRecursive(item, submoduleMap, module));

              cache[module.path] = mappedSidebarItems;
              console.log(mappedSidebarItems);
              return mappedSidebarItems;
       }

       return getSidebarItems;
})();

export default getSidebarItems;