import { Link } from "react-router-dom";
import { getImage } from "../../utils/imagePathLoader";

function NewsCard({ news }) {
    return (
         <div className="news-post">
            <div className="news-post-image">
                <div className="news-overlay"></div>
                <div className="news-category"><Link to="#">{news.category}</Link></div>
                <img src={getImage(news.image)} alt={news.title} />
            </div>
            <div className="news-post-text">
                <h3><Link to="#">{news.title}</Link></h3>
                <p>{news.description}</p>
            </div>
            <div className="news-post-meta">
                <Link to="#"><i className="fa fa-user"></i>Admin</Link>
                <Link to="#"><i className="fa fa-heart-o"></i> 370 likes</Link>
                <Link to="#"><i className="fa fa-comments-o"></i> 24 comments</Link>
            </div>
        </div>
    );
}

export default NewsCard;