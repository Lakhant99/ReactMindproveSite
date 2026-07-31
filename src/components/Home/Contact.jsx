import { getImage } from "../../utils/imagePathLoader";
import ContactForm from "../Common/ContactForm";
import WomanTab from "../../assets/images/resources/man-with-tab.png";

function Contact() {
  return (
    <section className="get-quote-section" style={{ backgroundImage: `url(${getImage('images/resources/getquote-bg-img.jpg')})`}}>
        <div className="container">
            <div className="row clearfix">
                <div className="form-column col-lg-7 col-md-8 col-sm-12 col-xs-12">
                    <div className="sec-title ">
                    <h2 className="left">Request A Call Back</h2>
                    <p>Thinking about a project ?</p>
                    </div>
        
                    <div className="form-box default-form">
                        <ContactForm />
                    </div>
                </div>
            
                <div className="image-column col-lg-5 col-md-4 col-sm-12 col-xs-12">
                    <figure className="image">
                        <img src={WomanTab} alt="MindProve Technologies Pvt Ltd" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
    
  );
}

export default Contact;