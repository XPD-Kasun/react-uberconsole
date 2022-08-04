import { useContext } from 'react';
import { UberConsoleContext } from './UberProvider';

function useUberConfig() {

       let uberContext = useContext(UberConsoleContext);
       return uberContext;

}

export default useUberConfig;