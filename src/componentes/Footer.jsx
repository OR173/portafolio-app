
function Footer() {   return( 

    <footer className="footer contenedores">
    
        <div className="footer__nav">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
        <div className="footer__socialMedia">
            <ul>
                <li>
                    <a href="https://github.com/OR173" className="icon-button github">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="" className="icon-button linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=51925705427" className="icon-button linkedin">
                        <i className="fa-brands fa-whatsapp"></i>   
                    </a>
                </li>
                <li>
                    <a href="" className="icon-button google">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="" className="icon-button facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer__copyright">
            <h3>Todos los derechos reservados.</h3>
        </div>

</footer>


)}  export default Footer;  