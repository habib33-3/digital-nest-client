import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Details = () => {
  const details = useLoaderData();

  console.log(details);
  const {
    productImg,
    productName,
    brandName,
    productType,
    productPrice,
    productDescription,
    rating,
  } = details[0];
  console.log(rating);

  return (
    <div className="max-w-7xl mx-auto bg-blue-300 my-10 rounded-2xl flex flex-col p-5">
      <img
        src={productImg}
        alt=""
        className="w-11/12 mx-auto h-auto rounded-e-lg"
      />
      <div className="my-2">
        <h1 className="text-blue-600 text-5xl text-center font-medium">
          {productName}
        </h1>
        <h2 className="text-2xl text-blue-600/70"> Brand: {brandName}</h2>
        <h3 className="text-xl text-blue-600/60"> Type: {productType}</h3>
        <p className="text-gray-700 text-justify ">{productDescription} </p>
      </div>
      <div className="flex justify-center items-center flex-col space-y-10 mt-10">
        <Rating
          value={rating}
          isDisabled
          style={{ maxWidth: "200px" }}
        ></Rating>
        <p className="text-5xl font-bold text-gray-500">
          Price: {productPrice}$
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="btn btn-secondary text-xl font-semibold mx-auto my-5">
          Add to <CiShoppingCart className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Details;
