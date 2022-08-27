import { BaseProps, ReactChildren } from "../../../types";

export interface TabPanelProps extends BaseProps {
}

export interface TabPageProps {
       title: string,
       children: ReactChildren
}