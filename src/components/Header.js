import React, { Fragment } from 'react';





export const Header = ()=>{
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <h2><a href="index.html">H.Agmir</a></h2>
                        </div>
                        <div className="mobile-menu">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li><a className="current" href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;