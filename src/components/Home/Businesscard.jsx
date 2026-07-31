import leader from "../../assets/images/icons/leader.png";
import worldmap from "../../assets/images/icons/world-map.png";
import money from "../../assets/images/icons/money.png";

function Businessescard() {
    return (
        <>
        <section className="min-features">
			<div className="container">
				<div className="small-features">
					<div className="row">		
						<div className="col-md-4">
							<div className="single-features">
								<div className="media">
                                    <img
                                        src={leader}
                                        className="mr-3"
                                        alt="MindProve Technologies Pvt Ltd"
                                    />
								  <div className="media-body">
									<h5 className="mt-0">Business with Thought Leadership</h5>
								  </div>
								</div>	
							</div>	
						</div>
						<div className="col-md-4">
							<div className="single-features">
								<div className="media">
                                   <img
                                        src={worldmap}
                                        className="mr-3"
                                        alt="MindProve Technologies Pvt Ltd"
                                    />
								  <div className="media-body">
									<h5 className="mt-0">Global consumer insights for business</h5>
								  </div>
								</div>	
							</div>	
						</div>
						<div className="col-md-4">
							<div className="single-features">
								<div className="media">
                                    <img
                                        src={money}
                                        className="mr-3"
                                        alt="MindProve Technologies Pvt Ltd"
                                    />
								  <div className="media-body">
									<h5 className="mt-0">Segment of focused investors </h5>
								  </div>
								</div>	
							</div>	
						</div>					
					</div>
				</div>
			</div>
		</section>
        </>

    );
}

export default Businessescard;