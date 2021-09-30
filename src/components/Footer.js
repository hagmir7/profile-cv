import React from 'react';


export const Footer = ()=>{
    return(
        <footer className="footer-area pt-30 pb-30">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="copyright-text">
                        <p>© Copyright <a href="https://codepopular.com/">CodePopular</a>  | All Rights Reserved</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="footer-social">
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i> <span>Facebook</span></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i> <span>Twitter</span></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i> <span>Linkedin</span></a></li>
                            <li><a href="#"><i className="fab fa-pinterest-p"></i> <span> Pintarest</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;