import React from "react";

export type ReactChildren = JSX.Element[] | JSX.Element | React.ReactNode | null

export type KeySelector = (item: object) => string;

export interface ControlDataSource {
       
       data: object[];
       idSelector: KeySelector
}

export interface SubModule {
       id: any,
       name: string,
       path: string,
       component: Promise<{ default: React.ComponentType<any> }>,
       hideSidebar?: boolean,
       hasInternalRoutes?: boolean
}

export enum SidebarItemType {
       group = 'group',
       submodule = 'submodule',
       link = "link"
}

export interface SidebarItem {
       type: SidebarItemType,
       subModuleId?: any,
       text?: string,
       url?: string,
       className?: string,
       items?: SidebarItem[]
}

export interface SidebarConfig {
       items: SidebarItem[]
}

export interface Module {
       id: any,
       name: string,
       path: string,
       isDefault?: boolean,
       sidebar?: ReactChildren,
       layout?: Promise<{ default: React.ComponentType<any>; }>,
       sidebarConfig: SidebarConfig
       subModules: SubModule[]
}

export interface ModuleConfig {
       appName: string,
       modules: Module[],
       rootPath: string,
       moduleErrorComponent: ReactChildren,
}
