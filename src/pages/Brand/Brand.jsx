import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Brand = () => {
  const brands = useLoaderData();

  const { id } = useParams();

  const brand = brands.find((data) => data.id == id);

  const { brand_name, images } = brand;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-6xl text-purple-700 font-bold">
        {brand_name}
      </h1>
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
                    <button className="btn btn-primary">Shop Now</button>
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

export default Brand;
