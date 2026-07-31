import WhoWeare from "../../assets/images/background/who_we_are1.png";
import { Link } from "react-router-dom";
function About() {
    return (
       <section id="aboutPage" className="about about-2">
			<div className="container">
				<div className="item-list">
					<div className="row">
					
						<div className="col-md-6 col-xs-12">
							<div className="item">
								<figure className="image-box">
                                    <img
                                        src={WhoWeare}
                                        className="img-responsive"
                                        alt="MindProve Technologies Pvt Ltd"
                                    />
								</figure> 
							</div>
						</div>
						<div className="col-md-6 col-xs-12">
							<div className="item clearfix">
								<div className="sec-title">
									<h2 className="left">Together, We are Shaping a Promising Future.</h2>
								</div>
								<div className="content-box">
                                    <p>
                                        Delivers innovative software solutions designed to help businesses grow,
                                        scale, and succeed in a digital-first world. We empower industries like
                                        Healthcare, FinTech, Banking, Education, and more with secure, scalable,
                                        and high-performance technology.
                                        <br />
                                        <br />
                                        With a focus on quality, innovation, and on-time delivery, we partner with
                                        clients globally to transform ideas into impactful digital products.
                                    </p>
                                    <Link to="/" className="thm-btn">Join Us Now</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default About;