import { createContext, useMemo, useState } from 'react';
import { PopoverManagerContextType } from './types';

const PopoverManagerContext = createContext<PopoverManagerContextType>(null)
let currentId = 0;

function PopoverManager({ children }) {

       let [currentPopoverId, setCurrentPopoverId] = useState(currentId);

       let popoverMangerContextValue = useMemo(() => {

              const setCurrentPopover = (id: number) => {
                     setCurrentPopoverId(id);
              };

              const addToContext = () => {
                     return ++currentId;
              };

              let value: PopoverManagerContextType = {
                     currentPopoverId,
                     setCurrentPopoverId: setCurrentPopover,
                     add: addToContext
              };

              return value;

       }, [currentPopoverId]);



       return (
              <PopoverManagerContext.Provider value={popoverMangerContextValue}>
                     {children}
              </PopoverManagerContext.Provider>
       )
}

export { PopoverManagerContext };
export default PopoverManager;