import { useEffect } from "react";
import { useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const BrandCards = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="w-4/5 mx-auto my-10 ">
      <h1 className="text-center text-5xl font-bold text-blue-700">
        Our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center mt-5">
        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            brand={brand}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
