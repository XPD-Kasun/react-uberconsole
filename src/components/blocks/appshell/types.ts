import { Module, ModuleConfig, ReactChildren } from "../../../types"

export interface SidebarSubItem {
       name: string,
       path: string,
       order: number
}

export interface SidebarItem {
       path: string,
       name: string,
       hasLayout: boolean,
       subItems: SidebarSubItem[]
}

export interface SNSIP {
       className?: string,
       itemList: SidebarItem[]
}

export interface SidebarNavigationSectionProps {
       className?: string,
       config: ModuleConfig
}

export interface AppShellProps {
       children?: ReactChildren,
       modulePath: string,
       sidebar?: ReactChildren,
       sidebarMaxHeight: number|string
}

export interface ModuleLinkProps {
       module?: string,
       subModule: string,
       children: ReactChildren
}