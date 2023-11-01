import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = ({ images }) => {
  return (
    <div>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="w-full  flex justify-center-items-center mt-5 card"
        >
          {images.map((image, idx) => (
            <SwiperSlide
              key={idx}
              className=" "
            >
              <div
                className="hero h-72"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                      Get Your Best Deal
                    </h1>
                    <Link>
                      <button className="btn btn-primary">Shop Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
