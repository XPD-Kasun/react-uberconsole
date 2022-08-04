import React from 'react';
import { UberConsoleProps, UberContextType } from './types';

let contextValue: UberContextType = {
       moduleConfig: null
};

export const UberConsoleContext = React.createContext(contextValue);

export default class UberConsoleProvider extends React.Component<UberConsoleProps> {

       constructor(props) {
              super(props);              
       }

       render(): React.ReactNode {

              return (
                     <UberConsoleContext.Provider value={this.props.uberConfig}>
                            {this.props.children}
                     </UberConsoleContext.Provider>
              )

       }


}