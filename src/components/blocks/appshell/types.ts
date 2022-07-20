import { ModuleConfig, ReactChildren } from "../../../types"

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
       moduleConfig: ModuleConfig,
       children?: ReactChildren,
       modulePath: string,
       sidebar?: ReactChildren,
       sidebarMaxHeight: number|string
}