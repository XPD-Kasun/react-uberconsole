import { useState, useContext, useRef, useEffect } from 'react';
import { PopoverManagerContext } from './PopoverManager';
import { PopoverManager } from './types';

function usePopoverManager() : PopoverManager {

       let context = useContext(PopoverManagerContext);
       let id = useRef(null);

       if (id.current === null) {
              id.current = context.add();
       }

       return {
              isShowing: () => {
                     return id.current === context.currentPopoverId;
              },
              setVisibility: (show: boolean) => {
                     if (show) {
                            context.setCurrentPopoverId(id.current);
                     }
                     else {
                            context.setCurrentPopoverId(-1);
                     }
              }
       };
};

export default usePopoverManager;