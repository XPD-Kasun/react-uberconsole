import { BaseProps, ReactChildren } from "../../../types";

export interface FrameworkSnapProps extends BaseProps {
       header: ReactChildren,
       hasPadding: boolean
}

export interface SnapProps extends BaseProps {
       title: string,
       isCollapsible?: boolean,
       actionArea?: ReactChildren,
       hasPadding?: boolean
}