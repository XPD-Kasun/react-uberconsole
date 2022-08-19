import { IoChevronForwardOutline } from "react-icons/io5";
import FrameworkBreadcrumbs from "./FrameworkBreadcrumbs";


function Breadcrumbs({ className }) {

       return (
              <FrameworkBreadcrumbs className={className} separator={<div className="sep"><IoChevronForwardOutline size="18px" color="#bbb"></IoChevronForwardOutline></div>} links={[]}></FrameworkBreadcrumbs>
       )
}

export default Breadcrumbs;