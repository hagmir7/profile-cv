


const About = ()=>{
    return(
        <section className="about-area pt-100 pb-100" id="about">
        <div className="container">
            {/* <!-- Section Headding --> */}
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="section-headding text-center pb-50">
                        <h2>About <span>Me</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <div className="about-img">
                        <img src="assets/img/about.png" alt="about" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-info pt-35">
                        <h4>Hi! I am Johnny Depp</h4>
                        <h2>Expert Web Design & Development</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        {/* <!-- About Social --> */}
                        <div className="about-social">
                            <span>Find On Me :</span>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-github"></i></a></li>
                                <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- About Btn --> */}
                        <div className="about-btn pt-30">
                            <a className="button" href="#">Download Cv</a>
                            <a className="button button2" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About;