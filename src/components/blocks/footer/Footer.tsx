import { FooterProps } from "./types";

function Footer({ className = "footer-fs", isFixed = true, children }: FooterProps) {

       if (isFixed) {
              className += ' is-fixed';
       }

       return (
              <footer className={className}>
                     <div className="footer-wrap">
                            {children}
                     </div>
              </footer>
       )
}

export default Footer;