import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Details = () => {
  const { user } = useAuth();
  const details = useLoaderData();

  const {
    productImg,
    productName,
    brandName,
    productType,
    productPrice,
    productDescription,
    rating,
  } = details[0];

  const handleAddToCart = () => {
    const newCart = {
      userId: user.uid,
      productImg,
      productType,
      productName,
      productPrice,
    };
    console.log(newCart);

    fetch("https://digital-nest-backend.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added To the Cart");
        }
      });
  };

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
        <button
          className="btn btn-secondary text-xl font-semibold mx-auto my-5"
          onClick={handleAddToCart}
        >
          Add to <CiShoppingCart className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Details;
