import { Link } from "react-router-dom";
import { getImage } from "../../utils/imagePathLoader";

function FeatureCard({ feature }) {
    //console.log(getImage('images/icons/how-3.png'));
  return (
     <div className="col-md-4 col-sm-6 col-xs-12">
      <div
        className="how-box-one"
        style={{
          backgroundImage: `linear-gradient(rgba(3,61,117,.9), rgba(3,61,117,.9)), url(${getImage(feature.image)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="inner-box">
          <div className="icon-box">
            <img src={getImage(feature.icon)} alt={feature.title} />
          </div>

          <h4>
            <Link to="/">{feature.title}</Link>
          </h4>

          <div className="text">{feature.description}</div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;