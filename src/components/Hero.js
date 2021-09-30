import React from "react"


export const Hero = ()=> {
    return(
        <section className="hero-area" id="home" style={{}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="hero-caption text-center">
                        <h4 className="wow fadeInLeft" data-wow-duration=".5s" data-wow-delay=".3s">I am Hassan Agmir</h4>
                        <h2 className="cd-headline clip is-full-width wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".6s">I am a
                            <span className="cd-words-wrapper">
                                <b className="is-visible">Web Designer</b>
                                <b className="headline2">Web Developer</b>
                                <b> &#xa0; Softwer Developer </b>
                            </span>
                        </h2>
                        <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".8s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>

                        <div className="hero-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".8s">
                            <a className="button button2" href="#">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
    
}

export default Hero;