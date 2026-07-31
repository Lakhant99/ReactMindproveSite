import features from "../../data/features.json";
import FeatureCard from "../Common/FeatureCard";

function Features() {
  return (
    <section id="how-it-work" className="how-it-work">

      <div className="container text-center">

        <div className="sec-title">
            <h2 className="center">Our main Features</h2>
            <p>To combine technology, data, and innovation to build impactful digital products and long-term partnerships globally.</p>
        </div>

        <div className="how-one-container">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;