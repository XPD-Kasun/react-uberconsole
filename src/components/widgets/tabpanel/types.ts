import { BaseProps, ReactChildren } from "../../../types";

export interface TabPanelProps extends BaseProps {
       hasPadding?:boolean
}

export interface TabPageProps {
       title: string,
       children: ReactChildren
}