import { ControlDataSource } from "../../../types";

export interface Action {
       id: any,
       text: string
}

export interface ColumnMeta {
       name: string,
       displayName: string,
       order?: number,
       width: string,
       type?: string,
       actions?: (Action | string)[]
}

export interface ColumnConfig {
       [colName: string]: ColumnMeta
}

export interface DataTableProps {
       className: string,
       onAction?: (command: string, item: any) => void,
       dataSource: ControlDataSource,
       columnConfig?: ColumnConfig

}