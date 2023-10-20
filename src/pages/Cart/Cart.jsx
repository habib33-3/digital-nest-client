import { Link, useLoaderData } from "react-router-dom";

import { useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import toast from "react-hot-toast";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [products, setProducts] = useState(loadedCart);

  console.log(loadedCart);

  const handleCheckOut = () => {
    toast.success("CheckOut Successfully");
  };

  return (
    <div>
      <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        <ul className="flex flex-col divide-y divide-gray-200">
          {products.map((product) => (
            <li
              key={product.id}
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
        <Link to="/">
          <button className="btn btn-accent">Back to shop</button>
        </Link>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCheckOut}
            className="btn btn-accent"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
