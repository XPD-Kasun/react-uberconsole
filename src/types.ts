export type ReactChildren = JSX.Element[] | JSX.Element | React.ReactNode | null

export type KeySelector = (item: object) => string;

export interface ControlDataSource {
       
       data: object[];
       idSelector: KeySelector
}