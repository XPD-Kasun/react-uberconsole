import { ReactChildren } from "../../../types";

export interface BreadcrumbLink {
       path: string,
       name: string
}

export interface FrameworkBreadcrumbsProps {
       className?: string,
       children?: ReactChildren,
       separator: ReactChildren,
       links: BreadcrumbLink[]
}