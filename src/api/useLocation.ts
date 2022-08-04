import { useLocation as useLoc } from 'react-router-dom';

function useLocation() {

       try {
              let path = useLoc().pathname;

              let segments = path.split('/');
              
              return {
                     module: segments[1],
                     subModule: segments[2],
                     path: path
              };

       }
       catch (e) {              
              console.log('useLocation hook cannot be used outside AppShell (modules)');
              return null;
       }

}

export default useLocation;