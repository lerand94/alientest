import classes from "./Showcase.module.css";
import Title from "./Title";

import back from "../assets/back2.png";
import dev from "../assets/dev.png";
import show1 from "../assets/show1.png";
import show2 from "../assets/show2.png";
import show3 from "../assets/show3.png";
import show4 from "../assets/show4.png";
import show5 from "../assets/show5.png";
import ico from "../assets/showcase-ico.svg";

// Core modules imports are same as usual
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

const Showcase = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <section
      className={classes.showcase}
      style={{ backgroundImage: `url(${back})` }}
    >
      <Title text="Showcase" ico={ico} />
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 77,
          },
        }}
      >
        <SwiperSlide>
          <img src={show1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show5} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Showcase;
