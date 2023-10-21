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
    <div className="mx-auto max-w-5xl px-5 py-24">
      <div className="mx-auto flex flex-wrap items-center bg-neutral p-6 rounded-xl lg:w-4/5">
        <img
          alt={productName}
          className="h-64 w-full object-cover lg:h-96 rounded-md lg:w-1/2"
          src={productImg}
        />
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          <h2 className="text-sm font-semibold tracking-widest text-primary">
            {brandName}
          </h2>
          <h1 className="my-4 text-3xl font-semibold text-neutral-content">
            {productName}
          </h1>
          <p className="text-gray-300">{productType}</p>
          <div className="my-4 flex items-center">
            <span className="flex items-center space-x-1">
              <Rating
                value={rating}
                isDisabled
                style={{ width: "100px" }}
              ></Rating>
            </span>
          </div>
          <p className="leading-relaxed text-neutral-content">
            {productDescription}
          </p>

          <div className="flex items-center justify-between">
            <span className="title-font text-xl font-bold text-neutral-content">
              $ {productPrice}
            </span>
            <div className="flex flex-col justify-center items-center">
              <button
                className="btn btn-primary text-xl font-semibold mx-auto my-5"
                onClick={handleAddToCart}
              >
                Add to <CiShoppingCart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
