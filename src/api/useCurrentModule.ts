import { useLocation } from 'react-router-dom';
import { useUberConfig } from '../components/core/uberProvider';
import getModuleInfoFromPath from '../shared/getModuleInfoFromPath';

function useCurrentModule() {

       let moduleConfig = useUberConfig().moduleConfig;

       try {
              let path = useLocation().pathname;
              let moduleInfo = getModuleInfoFromPath(moduleConfig, path);
              return moduleInfo;

       }
       catch (e) {              
              return null;
       }
       

}

export default useCurrentModule;