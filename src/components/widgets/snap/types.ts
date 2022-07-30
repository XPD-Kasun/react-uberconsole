import { ReactChildren } from "../../../types";

export interface SnapProps {
       title: string,
       isCollapsible: boolean,
       actionArea?: ReactChildren,
       children: ReactChildren
}