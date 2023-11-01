import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import CartCard from "./components/CartCard/CartCard";
import toast from "react-hot-toast";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [products, setProducts] = useState(loadedCart);

  console.log(loadedCart);

  const handleCheckOut = () => {
    if (products) {
      return toast.success("CheckOut Successfully");
    }

    return toast.error("Cart is empty");
  };

  return (
    <div>
      {products.length > 0 ? (
        <div className="mx-auto flex max-w-3xl  flex-col  p-6 px-2 sm:p-10 sm:px-2">
          <ul className="flex flex-col divide-y divide-gray-200 min-h-[350px]">
            {products.map((product) => (
              <li
                key={product._id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <CartCard
                  product={product}
                  products={products}
                  setProducts={setProducts}
                />
              </li>
            ))}
          </ul>
          <div className=" flex justify-between">
            <div>
              <Link to="/">
                <button className="btn btn-accent">Back to shop</button>
              </Link>
            </div>
            <div className=" space-x-4">
              <button
                onClick={handleCheckOut}
                className="btn btn-accent"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-20 max-w-lg mx-auto flex flex-col gap-10 text-center text-primary-content">
          <h1 className="text-5xl font-bold">Your cart is empty</h1>
          <Link to="/">
            <button className="btn btn-primary w-32 mx-auto">Shop now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
