import { Link } from "react-router-dom";
function Promotion(){
    return(
        <div className="promotion">
            <div className="container">
                <div className="inner_promotion">
                    <div className="row">
                        <div className="col-sm-12 col-md-10">
                            <div className="sec-title text-left">
                                <h2 className="left">Looking for an excelent business solution ?</h2>
                                <p>Send us some details about your project, and feel free to ask questions about our process. Our consultants will be with you ASAP.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-2">
                            <Link to="#" className="thm-btn inverse">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Promotion;