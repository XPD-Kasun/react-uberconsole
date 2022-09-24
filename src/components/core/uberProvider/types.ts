import { ModuleConfig, ReactChildren } from "../../../types"

export type Rectangle = {
       width: number,
       height: number
};

export interface UberContextType {
       moduleConfig: ModuleConfig,       
};

export interface UberContextInternalType extends UberContextType {
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

export interface PopoverManagerContextType {
       currentPopoverId: number,
       setCurrentPopoverId: (id: number) => void,
       add: () => number
}

export interface PopoverManager {
       isShowing: () => boolean, 
       setVisibility: (show: boolean) => void
}