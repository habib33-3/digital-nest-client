import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    productImg,
    productName,
    brandName,
    productType,
    productPrice,
    rating,
  } = product[0];

  const [newRating, setNewRating] = useState(rating);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const productImg = form.productImg.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const productPrice = form.productPrice.value;

    const updatedProduct = {
      productImg,
      productName,
      brandName,
      productType,
      productPrice,
      rating: newRating,
    };

    fetch(`https://digital-nest-backend.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Product Updated");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-6xl font-bold mb-5 text-purple-600 text-center">
        Update Product
      </h1>
      <div className="w-full lg:w-2/5 mx-auto">
        <form
          onSubmit={handleUpdate}
          className="space-y-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="text"
              placeholder="Product Image URL"
              className="input input-bordered"
              required
              name="productImg"
              defaultValue={productImg}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered"
              required
              name="productName"
              defaultValue={productName}
            />
          </div>
          <div>
            <select
              className="select select-success w-full max-w-xs"
              required
              name="brandName"
              defaultValue={brandName}
            >
              <option disabled>Brand Name</option>
              <option>Apple</option>
              <option>Google</option>
              <option>Sony</option>
              <option>Samsung</option>
              <option>Intel</option>
              <option>Gigabyte</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <input
              type="text"
              placeholder="Product Type"
              className="input input-bordered"
              required
              name="productType"
              defaultValue={productType}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              className="input input-bordered"
              required
              name="productPrice"
              defaultValue={productPrice}
            />
          </div>
          <div className="border p-2">
            <span className="label label-text text-2xl">Rating</span>
            <Rating
              style={{ maxWidth: 250 }}
              value={newRating}
              onChange={setNewRating}
              isRequired
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-full"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
