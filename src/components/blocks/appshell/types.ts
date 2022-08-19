import { SidebarItemWithModules } from "../../../shared/getSidebarItems"
import { Module, ModuleConfig, ReactChildren } from "../../../types"

export interface SidebarItem {
       name: string,
       path: string,
       order: number
}

export interface SNSIP {
       className?: string,
       items: SidebarItemWithModules[],
       //itemList: SidebarItem[]
}

export interface SidebarNavigationSectionProps {
       className?: string
}

export interface AppShellProps {
       children?: ReactChildren,
       modulePath: string,
       sidebar?: ReactChildren,
       height: number|string,
       mobileMenu: ReactChildren
}

export interface ModuleLinkProps {
       module?: string,
       className?: string,
       subModule: string,
       children: ReactChildren,
       queryString?: URLSearchParams | string,
       hash?: string
}

export interface LoaderProps {
       loaderElement?: ReactChildren
}