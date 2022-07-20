export type ReactChildren = JSX.Element[] | JSX.Element | React.ReactNode | null

export type KeySelector = (item: object) => string;

export interface ControlDataSource {
       
       data: object[];
       idSelector: KeySelector
}


export interface SubModule {
       name: string,
       path: string,
       component: Promise<{ default: React.ComponentType<any>; }>,
       showInSideBar: boolean
}

type SubModules = {
       [subModule: string] : SubModule
};

export interface Module {
       name: string ,
       path: string,
       layout?: Promise<{ default: React.ComponentType<any>; }>,
       useSidebar: boolean,
       subModules: SubModule[]
}

type Modules = {
       [module: string]: Module
};

export interface ModuleConfig {

       appName: string,
       modules: Module[],
       moduleErrorComponent: ReactChildren,
}
