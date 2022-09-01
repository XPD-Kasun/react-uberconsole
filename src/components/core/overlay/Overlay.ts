import { Component, ReactNode } from "react";
import { createPortal } from 'react-dom';
import { IoThermometerOutline } from "react-icons/io5";
import { OverlayProps } from './types';


export default class Overlay extends Component<OverlayProps, { isMounted: boolean }> {

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

       constructor(props: OverlayProps) {

              super(props);
              if (!this.overlayRoot) {
                     this.overlayRoot = document.createElement('div');
                     this.overlayRoot.id = 'overlay-root';
                     document.body.append(this.overlayRoot);

              }
              this.currentContainer = document.createElement('div');
              this.state = {
                     isMounted: false
              };

       }

       componentDidMount(): void {

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
              this.setState({
                     isMounted: true
              });
       }

       componentDidUpdate(prevProps, prevState, snapshot?: any): void {
              if (!this.props.isShowing) {
                     this.currentContainer.classList.add('close');
              }
       }

       componentWillUnmount(): void {

              if(this.state.isMounted) {
                     
                     setTimeout(() => {
                            this.overlayRoot.removeChild(this.currentContainer);
                     }, 200)
              }
       }

       render(): ReactNode {

              console.log('renderedx', this.currentContainer, this.state)
              if (this.state.isMounted && this.currentContainer) {
                     return createPortal(this.props.children, this.currentContainer.children[0])
              }
              
       }


}