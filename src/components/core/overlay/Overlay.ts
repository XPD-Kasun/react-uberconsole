import React, { Component, ReactNode } from "react";
import { createPortal } from 'react-dom';


export default class Overlay extends Component<{ children: ReactNode, isShowing: boolean }> {

       overlayRoot = document.getElementById('overlay-root');
       currentContainer: HTMLDivElement = null;

       constructor(props) {

              super(props);
              if (!this.overlayRoot) {
                     this.overlayRoot = document.createElement('div');
                     this.overlayRoot.id = 'overlay-root';
                     document.body.append(this.overlayRoot);

              }
              this.currentContainer = document.createElement('div');
              let overlayEl = document.createElement('div');
              overlayEl.classList.add('overlay');
              this.currentContainer.appendChild(overlayEl);
              this.currentContainer.classList.add('overlay-container');
              this.overlayRoot.appendChild(this.currentContainer);
       }

       // componentDidMount(): void {
       //        if(!document.body.classList.contains('has-overlay')) {
       //               document.body.classList.add('has-overlay');
       //        }
       // }

       componentDidUpdate(prevProps: Readonly<{ children: ReactNode; isShowing: boolean; }>, prevState: Readonly<{}>, snapshot?: any): void {
              if(!this.props.isShowing) {
                     this.currentContainer.classList.add('close');
              }
       }

       componentWillUnmount(): void {
              setTimeout(() => {
                     this.overlayRoot.removeChild(this.currentContainer);
                     // if(this.overlayRoot.childElementCount == 0) {
                     //        document.body.classList.remove('has-overlay');
                     // }        
              }, 200);
       }

       render(): ReactNode {

              if (this.currentContainer) {
                     console.log(this.props.children)
                     return createPortal(this.props.children, this.currentContainer.children[0])
              }
       }


}