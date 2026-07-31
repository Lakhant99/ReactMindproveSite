import { Link } from "react-router-dom"
import logo from "../../assets/images/logo/new-logo-mindprove_full_pixlr.png";
function Footer(){
    return(
        <footer className="footer footer-classNameic">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="footer-text">
							<Link to="index.html">
                                <img src={logo} data-bb-lazy="false" className="logo-white-mindprov_footer" alt="MindProve Technologies Pvt Ltd" /></Link>
							<p>
								Unlocking the Future of Intelligence !! <br />
								At MindProve Technologies Pvt Ltd, we understand the importance of delivering top-notch solutions to meet the evolving needs of your business.
							</p>
							<div className="social-icons">
								<Link to="#" className="btn btn-social btn-social-o twitter">
									<i className="fa fa-twitter"></i>
								</Link>
								<Link to="#" className="btn btn-social btn-social-o linkedin">
									<i className="fa fa-linkedin"></i>
								</Link>
								<Link to="#" className="btn btn-social btn-social-o facebook">
									<i className="fa fa-facebook-f"></i>
								</Link>
								<Link to="#" className="btn btn-social btn-social-o skype">
									<i className="fa fa-skype"></i>
								</Link>
								<Link to="#" className="btn btn-social btn-social-o pinterest">
									<i className="fa fa-pinterest-p"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="links">
							<h3>Links</h3>
							<ul className="">
								<li><Link to="/">Home</Link></li>
								<li><Link to="#aboutPage">About Us</Link></li>
								<li><Link to="#servicePage">Services</Link></li>
								
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="location">
							<h3>Location</h3>
							<ul>
								<li className="">MindProve Technologies Pvt Ltd</li>
								<li><i className="fa fa-home"></i> 401 Metro Pride Building 6 Mohan Nagar Janki Nagar Gate Navlakha  Square Indore - 452001 (India)</li>
								<li><i className="fa fa-phone"></i> <Link to="#">+91 8248657899</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="location">
							<h3>Business Department</h3>
							<ul>
								<li>Contact for collaborations & Partnerships</li>	
								<li><i className="fa fa-phone"></i> <Link to="#">+91 8248657899</Link></li>
								<li><i className="fa fa-envelope"></i> <Link to="mailto.html"> business@mindprovetech.com </Link></li>
								<li><i className="fa fa-envelope"></i> <Link to="mailto.html"> info@mindprovetech.com </Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright">
					<hr />
					<div className="row justify-content-center">
						<div className="col-sm-12">
							<div className="copyRight_text text-center">
								<p> Copyright 2023-2026 by <Link to="/">MindProve Technologies Pvt Ltd</Link>. All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    );
}

export default Footer;