
function Header({children}) {


       return (
              <header className="header-main">
                     <div className="header-container">
                            <div className="header-wrapper">
                                   {
                                          children
                                   }
                            </div>
                     </div>
              </header>
       );

}

export default Header;