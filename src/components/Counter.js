import React from 'react';


export const Counter = () =>{
    return (
        <section className="counter-area pt-100 pb-70" style={{}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="counter-single text-center mb-30">
							<div className="counter-icon">
								<i className="fas fa-users"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">658</h2>
								<span>Employerers</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="counter-single text-center mb-30">
							<div className="counter-icon">
								<i className="fas fa-check-square"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">1390</h2>
								<span>Completed Projects</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="counter-single text-center mb-30">
							<div className="counter-icon">
								<i className="fas fa-cloud-download-alt"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">213</h2>
								<span>Files Downloaded</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="counter-single text-center mb-30">
							<div className="counter-icon">
								<i className="fas fa-fire"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">572</h2>
								<span>Happy Clients</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
export default Counter;