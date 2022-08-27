import { BaseProps, ReactChildren } from "../../../types";

export interface FrameworkSnapProps extends BaseProps {
       header: ReactChildren
}

export interface SnapProps extends BaseProps {
       title: string,
       isCollapsible: boolean,
       actionArea?: ReactChildren
}