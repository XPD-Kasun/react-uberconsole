import { ModuleConfig } from "../types";


export default function getItemList(moduleConfig: ModuleConfig) {

       let itemList = moduleConfig.modules.map(m => {
              let item = {
                     name: m.name,
                     path: m.path,
                     hasLayout: !!m.layout,
                     subItems: m.subModules
                            .filter(x => x.showInSideBar === undefined ? true : x.showInSideBar)
                            .map((sub, i) => {
                                   return {
                                          name: sub.name,
                                          path: (sub.path) ? m.path + '/' + sub.path : null,
                                          order: i
                                   };
                            })
              };
              return item;
       });

       return itemList;
}