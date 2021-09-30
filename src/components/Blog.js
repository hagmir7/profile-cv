import React from "react"

export const Blog = ()=>{
    return(
        <section className="blog-area pt-100 pb-70" id="blog">
			<div className="container">
				{/* <!-- Section Headding --> */}
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="section-headding text-center pb-50">
							<h2>My Latest <span>Blog</span></h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="blog-single mb-30">
							<div className="blog-thumb">
								<img src="assets/img/blog/blog1.jpg" alt="blog"/>
							</div>
							<div className="blog-content">
								<h2><a href="#">Developing an app is not much easier than think</a></h2>
								<div className="blog-meta">
									<span><i className="far fa-calendar-alt"></i> 30 Jan, 2021</span>
									<span><i className="far fa-comments"></i> 23 Comments</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="blog-single mb-30">
							<div className="blog-thumb">
								<img src="assets/img/blog/blog2.jpg" alt="blog"/>
							</div>
							<div className="blog-content">
								<h2><a href="#">Developing an app is not much easier than think</a></h2>
								<div className="blog-meta">
									<span><i className="far fa-calendar-alt"></i> 30 Jan, 2021</span>
									<span><i className="far fa-comments"></i> 23 Comments</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="sub-blog mb-30">
							{/* <!-- single sub blog --> */}
							<div className="sub-blog-single">
								<div className="sub-blog-thumb">
									<img src="assets/img/blog/sub-blog1.jpg" alt="sub-blog"/>
								</div>
								<div className="sub-blog-content">
									<h2><a href="#">Developing an app is not much easier..</a></h2>
									<div className="sub-blog-author-meta">
										<span><i className="far fa-calendar-alt"></i> 30 Jan, 2021</span>
										<span><i className="far fa-comments"></i> 75 Comments</span>
									</div>
								</div>
							</div>
							{/* <!-- single sub blog --> */}
							<div className="sub-blog-single">
								<div className="sub-blog-thumb">
									<img src="assets/img/blog/sub-blog2.jpg" alt="sub-blog"/>
								</div>
								<div className="sub-blog-content">
									<h2><a href="#">Developing an app is not much easier..</a></h2>
									<div className="sub-blog-author-meta">
										<span><i className="far fa-calendar-alt"></i> 30 Jan, 2021</span>
										<span><i className="far fa-comments"></i> 96 Comments</span>
									</div>
								</div>
							</div>
							{/* <!-- single sub blog --> */}
							<div className="sub-blog-single">
								<div className="sub-blog-thumb">
									<img src="assets/img/blog/sub-blog3.jpg" alt="sub-blog"/>
								</div>
								<div className="sub-blog-content">
									<h2><a href="#">Developing an app is not much easier..</a></h2>
									<div className="sub-blog-author-meta">
										<span><i className="far fa-calendar-alt"></i> 30 Jan, 2021</span>
										<span><i className="far fa-comments"></i> 5 Comments</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
export default Blog;