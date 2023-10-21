import { Link, useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";

const Brand = () => {
  const [products, setProducts] = useState([]);
  const brands = useLoaderData();

  const { brandName } = useParams();

  const brand = brands.find((data) => data.brand_name == brandName);

  const { brand_name, images } = brand;

  useEffect(() => {
    fetch(`https://digital-nest-backend.vercel.app/products/${brandName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [brandName]);

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
      <div>
        {products.length > 0 ? (
          <Products products={products} />
        ) : (
          <div className="flex flex-col justify-center items-center my-5 bg-sky-300 p-8">
            <img
              src="https://i.ibb.co/fF37G09/no-Product.jpg"
              alt=""
              className="w-96 rounded-lg"
            />
            <Link to="/">
              <button className="btn btn-primary mt-5">
                Browse other Brand
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
