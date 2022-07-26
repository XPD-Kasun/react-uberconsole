import React, { Component, ReactNode } from "react";
import { createPortal } from 'react-dom';
import { Bounds } from './types';


export default class Overlay extends Component<{
       className?: string,
       children: ReactNode,
       isShowing: boolean,
       overlayBounds?: Bounds,
       onOverlayClick?: (evt: MouseEvent) => void
}> {

       overlayRoot = document.getElementById('overlay-root');
       currentContainer: HTMLDivElement = null;

       getBound(val) {

              if (isNaN(parseInt(val))) {
                     return "0";
              }
              else {
                     return `${val}px`;
              }

       }

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
              if (this.props.className) {
                     this.currentContainer.classList.add(this.props.className);
              }
              if (this.props.overlayBounds) {
                     this.currentContainer.style.top = this.getBound(this.props.overlayBounds.top);
                     this.currentContainer.style.left = this.getBound(this.props.overlayBounds.left);
                     this.currentContainer.style.right = this.getBound(this.props.overlayBounds.right);
                     this.currentContainer.style.bottom = this.getBound(this.props.overlayBounds.bottom);
              }

              this.currentContainer.appendChild(overlayEl);
              this.currentContainer.classList.add('overlay-container');
              this.overlayRoot.appendChild(this.currentContainer);

              if (this.props.onOverlayClick) {
                     overlayEl.addEventListener('click', (evt) => {
                            if (evt.target === overlayEl) {
                                   this.props.onOverlayClick && this.props.onOverlayClick(evt);
                            }
                     });
              }
       }

       // componentDidMount(): void {
       //        if(!document.body.classList.contains('has-overlay')) {
       //               document.body.classList.add('has-overlay');
       //        }
       // }

       componentDidUpdate(prevProps: Readonly<{ children: ReactNode; isShowing: boolean; }>, prevState: Readonly<{}>, snapshot?: any): void {
              if (!this.props.isShowing) {
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