

export default function normalizeRootPath(rootPath: string) {

       if(!rootPath) {
              rootPath = "/";
       }
       else if(rootPath != '/') {
              
              rootPath += '/';            
       }

       return rootPath;

}