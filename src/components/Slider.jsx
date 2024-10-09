import {
  A11y,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const Slider = ({ children, className, ispagination, isNavigation }) => {
  return (
    <div>
      <Swiper
        // {...props}
        modules={[Pagination, Scrollbar, A11y, FreeMode, Navigation]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        pagination={ispagination ? { clickable: true } : false}
        navigation={isNavigation}
        className={`flex w-full my-4 ${className}`}
      >
        {children}
      </Swiper>
    </div>
  );
};
Slider.item = SwiperSlide;
export default Slider;
