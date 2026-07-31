import services from "../../data/services";
import ServiceCard from "../Common/ServiceCard";

function Services() {
//
// console.warn(services);
  return (
    <section id="servicePage" className="our-services rotated-bg">
			<div className="container">
				<div className="sec-title">
					<h2 className="center">Our Services</h2>
					<p>Let's Discover Our Service Our Service Features Charter.</p>
				</div>
        <div className="row clearfix">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))} 
        </div>
			</div>
		</section>
  );
}

export default Services;