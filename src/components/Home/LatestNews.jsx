import news from "../../data/news.json";
import NewsCard from "../Common/NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function LatestNews() {
  return (
    <section className="news">
      <div className="container">

        <div className="sec-title">
          <h2 className="left">Our latest Inside</h2>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.
          </p>
        </div>
        <div className="swiper-nav">
          <div className="swiper-button-prev">
            <i className="fa fa-angle-left"></i>
          </div>

          <div className="swiper-button-next">
            <i className="fa fa-angle-right"></i>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          // navigation
          loop
          // autoplay={{
          //   delay: 3000,
          // }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard news={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default LatestNews;