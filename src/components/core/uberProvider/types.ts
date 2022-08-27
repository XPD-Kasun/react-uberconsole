import { ModuleConfig, ReactChildren } from "../../../types"

export type Rectangle = {
       width: number,
       height: number
};

export type UberContextType = {
       moduleConfig: ModuleConfig,
       screenSize: Rectangle
};

export type UberConfigType = {
       moduleConfig: ModuleConfig,
};

export interface UberConsoleProps {

       uberConfig: UberConfigType,
       children?: ReactChildren

}

export interface UberConsoleState {
       screenSize: Rectangle
}