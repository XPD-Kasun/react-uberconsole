import { ModuleConfig, ReactChildren } from "../../../types"


export type UberContextType = {
       moduleConfig: ModuleConfig
};

export interface UberConsoleProps {

       uberConfig: UberContextType,
       children: ReactChildren

}