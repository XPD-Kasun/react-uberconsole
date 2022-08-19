import { useContext } from 'react';
import { UberConsoleContext } from './UberConsoleProvider';

function useUberConfig() {

       let uberContext = useContext(UberConsoleContext);
       return uberContext;

}

export default useUberConfig;