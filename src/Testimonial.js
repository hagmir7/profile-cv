import React from "react"

export const Testimonial = ()=>{
    return(
        <section className="testimonial-area pt-100 pb-100" style={{}}>
			<div className="container">
				{/* <!-- Section Headding --> */}
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="section-headding text-white text-center pb-50">
							<div className="icon mb-20">
								<i className="fas fa-quote-right"></i>
							</div>
							<h2>My Clients <span>Reviews</span></h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
						</div>
					</div>
				</div>
				<div className="row testimonial-full owl-carousel owl-theme">
					{/* <!-- single --> */}
					<div className="testimonial-single text-center">
						<div className="testimonial-single-full">
							<div className="client-thumb">
								<img src="assets/img/client.png" alt="client"/>
							</div>
							<div className="client-content pt-30">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								<h3><a href="#">Alex Smith</a></h3>
								<span>Happy Client</span>
							</div>
						</div>
					</div>
					{/* <!-- single --> */}
					<div className="testimonial-single text-center">
						<div className="testimonial-single-full">
							<div className="client-thumb">
								<img src="assets/img/client.png" alt="client"/>
							</div>
							<div className="client-content pt-30">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								<h3><a href="#">Alex Ripon</a></h3>
								<span>Happy Client</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}