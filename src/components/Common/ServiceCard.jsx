const images = import.meta.glob("../../assets/images/**/*", {
  eager: true,
  import: "default",
});

function ServiceCard({ service }) {
  const image = images[`../../assets${service.image}`];
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div className="single-service-item">

        <div className="service-icon">
          <img src={image} alt={service.title} />
        </div>

        <div className="service-text">
          <h4>{service.title}</h4>

          <p>{service.description}</p>
        </div>

      </div>
    </div>
  );
}

export default ServiceCard;