import { Link, useLoaderData, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Brand = () => {
  const [products, setProducts] = useState([]);
  const brands = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const { brandName } = useParams();

  const brand = brands.find((data) => data.brand_name == brandName);

  const { brand_name, images } = brand;

  // useEffect(() => {
  //   fetch(`https://digital-nest-backend.vercel.app/products/${brandName}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, [brandName]);

  useEffect(() => {
    axiosSecure
      .get(`/products/${brandName}`)
      .then((data) => {
        console.log(data)
        setProducts(data.data)});
  }, [axiosSecure, brandName]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-6xl text-purple-700 font-bold">
        {brand_name}
      </h1>

      {/* Slider */}
      <Slider images={images} />

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
                Browse other Brands
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
