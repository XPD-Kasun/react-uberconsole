import React from 'react';
import { UberConsoleProps, UberConsoleState, UberContextType } from './types';

let contextValue: UberContextType = {
       moduleConfig: null,
       screenSize: { width: window.innerWidth, height: window.innerHeight }
};

function throttle(fn, duration) {

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

       constructor(props) {
              super(props);
              this.state = {
                     screenSize: { width: window.innerWidth, height: window.innerHeight }
              }
       }

       componentDidMount(): void {
              let self = this;

              window.addEventListener('resize', throttle(function (evt) {

                     self.setState({
                            screenSize: { width: window.innerWidth, height: window.innerHeight }
                     })

              }, 1000));
       }

       cleanConfig() {
              let moduleConfig = this.props.uberConfig.moduleConfig;

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