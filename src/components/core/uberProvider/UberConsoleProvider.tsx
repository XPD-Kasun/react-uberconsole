import React from 'react';
import { UberConsoleProps, UberConsoleState, UberContextInternalType, UberContextType } from './types';

const isBrowser: () => boolean = () => typeof window !== 'undefined';


let contextValue: UberContextInternalType = {
       moduleConfig: null,
       screenSize: null
};

if (isBrowser()) {
       console.log('sdf')
       contextValue.screenSize = { width: window.innerWidth, height: window.innerHeight }
}

function throttle(fn, duration) {

       if (!isBrowser()) {
              return null
       }
       let timer = null;

       return function (evt) {

              if (timer) {
                     clearTimeout(timer);
              }

              timer = setTimeout(() => {
                     fn(evt);
              }, duration);
       }
}

export const UberConsoleContext = React.createContext(contextValue);

export default class UberConsoleProvider extends React.Component<UberConsoleProps, UberConsoleState> {

       constructor(props: UberConsoleProps) {

              super(props);

              if (isBrowser()) {
                     this.state = {
                            screenSize: { width: window.innerWidth, height: window.innerHeight }
                     }
              }
              else {
                     this.state = {
                            screenSize: {width:0, height:0}
                     }
              }
       }

       componentDidMount(): void {
              let self = this;

              window.addEventListener('resize', throttle(function (evt) {

                     self.setState({
                            screenSize: { width: window.innerWidth, height: window.innerHeight }
                     });

              }, 1000));
       }

       cleanConfig() {

              if (!this.props.uberConfig) {
                     throw new Error("No uberConfig prop was passed. uberConfig is required for UberConsoleProvider.")
              }

              let moduleConfig = this.props.uberConfig.moduleConfig;

              if (!moduleConfig) {
                     throw new Error("No moduleConfig was preset in uberConfig. Please include a valid moduleConfig for uberConfig prop.");
              }

              if (!moduleConfig.modules || moduleConfig.modules.length === 0) {
                     throw new Error('At least one module should exist in module configuration.');
              }

              for (let module of moduleConfig.modules) {
                     module.path = module.path.trim().toLowerCase();
                     if (module.path === '/') {
                            throw new Error('Module path should not be root. Please check your module config. Module "' + module.name + '" is having root as the path. Instead of "/" add a non root path. For example, "/mymodule".')
                     }
                     if (module.path[0] !== '/') {
                            module.path = '/' + module.path;
                     }
                     if(!module.subModules) {
                            module.subModules = [];
                     }
                     if(!module.sidebarConfig) {
                            module.sidebarConfig = {
                                   items: []
                            };
                     }
              }

              this.props.uberConfig.moduleConfig = moduleConfig;
       }

       render(): React.ReactNode {

              this.cleanConfig();

              return (
                     <UberConsoleContext.Provider value={{
                            moduleConfig: this.props.uberConfig.moduleConfig,
                            screenSize: this.state.screenSize

                     }}>
                            {this.props.children}
                     </UberConsoleContext.Provider>
              )

       }


}