import { BaseProps, ReactChildren, SidebarItemWithModules } from "../../../types"

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

export interface AppShellProps extends BaseProps {
       sidebar?: ReactChildren,
       height?: number|string
}

export interface ModuleLinkProps extends BaseProps{
       module?: string,
       subModule: string
       queryString?: URLSearchParams | string,
       hash?: string
}

export interface LoaderProps extends BaseProps {
}