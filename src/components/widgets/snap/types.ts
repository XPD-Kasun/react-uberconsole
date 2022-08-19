import { ReactChildren } from "../../../types";

export interface SnapProps {
       className?: string,
       title: string,
       isCollapsible: boolean,
       actionArea?: ReactChildren,
       children: ReactChildren
}