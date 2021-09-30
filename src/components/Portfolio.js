import React from "react"


export const Portfolio = () =>{
    return (
        <section className="portfolio-area pt-100 pb-100" id="portfolio">
			{/* <!-- Section Headding --> */}
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="section-headding text-center pb-50">
							<h2>My <span>Portfolio</span></h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Poerfolio Full --> */}
			<div className="portfolio-full">
				<div className="portfolio-list text-center">
					<ul>
						<li data-filter="all">All</li>
						<li data-filter=".design">Design</li>
						<li data-filter=".development">Development</li>
						<li data-filter=".uiux">Ul/UX</li>
						<li data-filter=".brand">Brand</li>
					</ul>
				</div>
				<div className="row portfolio-all containerEl mt-30">
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix design uiux">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item1.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item1.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix uiux brand">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item2.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item2.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix development">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item3.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item3.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix design">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item4.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item4.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix development">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item5.jpg" alt="portfolio" />
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item5.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix design">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item6.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item6.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix brand">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item7.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item7.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Single Portfolio --> */}
					<div className="col-lg-3 col-md-6 mix design">
						<div className="portfolio-item">
							<img src="assets/img/portfolio/item8.jpg" alt="portfolio"/>
							<div className="portfolio-overly">
								<div className="portfolio-overly-full">
									<a href="assets/img/portfolio/item8.jpg"><i className="fas fa-paperclip"></i></a>
									<h2>Brand</h2>
									<p>Crearive Design</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
export default Portfolio;