import { BaseProps, ReactChildren } from "../../../types";

export interface BreadcrumbLink {
       path: string,
       name: string
}

export interface FrameworkBreadcrumbsProps extends BaseProps {
       separator: ReactChildren,
       links: BreadcrumbLink[],
       currentPageName: string
}