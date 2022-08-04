

export default function normalizeRootPath(rootPath) {

       if(!rootPath) {
              rootPath = "/";
       }
       else if(rootPath != '/') {
              
              rootPath += '/';            
       }

       return rootPath;

}