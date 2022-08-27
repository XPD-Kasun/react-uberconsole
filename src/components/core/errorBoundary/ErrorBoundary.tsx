import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

       constructor(props: ErrorBoundaryProps) {
              super(props);

              this.state = {
                     hasError: false
              };
       }

       componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {

              if(this.props.logErrors) {
                     if(!this.props.logFn) {
                            console.log(error, errorInfo);
                     }
                     else {
                            this.props.logFn(error, errorInfo);
                     }
              }
       }

       static getDerivedStateFromError(error) {

              return {
                     hasError: true
              };

       }

       render(): React.ReactNode {
              
              if(this.state.hasError) {
                     return this.props.errorUI;
              }
              return this.props.children;
       }

}

export default ErrorBoundary;