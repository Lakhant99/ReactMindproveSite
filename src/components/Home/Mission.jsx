import missionimg from "../../assets/images/background/who_we_are2.png";
import { Link } from "react-router-dom";
function Mission() {
return (
    <section id="missionPage" className="about more">
        <div className="container">
            <div className="item-list">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="sec-title">
                            <h2 className="left">We are on A Mission with Vission</h2>
                            <h3>Mision</h3> <p>Our mission is to develop cutting-edge solutions that bridge the gap between human cognition and technological innovation. 
                                Through research, AI, and latest technologies, we aim to enhance cognitive performance, provide transformative tools for learning and productivity, and empower individuals to reach their full potential in a rapidly evolving digital world.<br /><br /></p>
                                <h3>Vision</h3> <p>To revolutionize the way humans and machines interact, by pioneering advanced technologies that enhance cognitive abilities, unlock the potential of the human mind, and empower individuals to shape the future through innovation and intelligence.
                            </p>
                            <ul className="about-links text-left">
                                <li><Link to= "#" className="thm-btn style-two">View Services</Link></li>
                                <li><Link to= "#" className="thm-btn style-two">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-10 col-xs-12">
                        <div className="item">
                            <figure className="image-box">
                                <img 
                                    src={missionimg}
                                    alt="MindProve Technologies Pvt Ltd"
                                />
                            </figure>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
			
	</section>
  );
}

export default Mission;