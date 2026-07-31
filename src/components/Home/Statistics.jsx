import statistics from "../../data/statistics";
import { getImage } from "../../utils/imagePathLoader";

function Statistics() {
    // console.warn(statistics[0]['image'])
  return (
    	<section className="countup-section bg-image" 
        style={{ backgroundImage: `url(${getImage('images/background/bg-1.jpg')})`, backgroundAttachment: 'fixed'}}
        >
			<div className="container">
				<div className="row">

                    {statistics.map((item) => (
                        <div className="col-md-4 col-6" key={item.id}>
                            <div className="text-center single_block">
                                <div className="icon-box">
                                     <img
                                        className="counter-icon"
                                        src={getImage(item.image)}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="counter" data-speed="3000" data-stop="1650">
                                    {item.count}
                                </div>
                                <span className="count">+</span>    
                                <h3>{item.title}</h3>
						    </div>
                        </div>
                    ))}
				</div>
			</div>
		</section>
  );
}

export default Statistics;




