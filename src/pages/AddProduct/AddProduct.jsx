import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddProduct = () => {
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const productImg = form.productImg.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const productPrice = form.productPrice.value;
    const productDescription = form.productDescription.value;

    const product = {
      productImg,
      productName,
      brandName,
      productType,
      productPrice,
      productDescription,
      rating,
    };

    // console.log(product);
    // fetch("https://digital-nest-backend.vercel.app/products", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       toast.success("Product Added");
    //       form.reset();
    //       setRating(0);
    //     }
    //   });

    axiosSecure.post("/products", product).then((data) => {
      console.log(data);
      if (data.data.insertedId) {
        console.log(data)
        toast.success("Product Added");
        form.reset();
        setRating(0);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-6xl font-bold mb-5 text-purple-600 text-center">
        Add Product
      </h1>
      <div className="w-full lg:w-2/5 mx-auto">
        <form
          action=""
          className="space-y-4"
          onSubmit={handleAddProduct}
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
            />
          </div>
          <div>
            <select
              className="select select-success w-full max-w-xs"
              required
              name="brandName"
              defaultValue={null}
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Products Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Short Description"
              name="productDescription"
            ></textarea>
          </div>
          <div className="border p-2">
            <span className="label label-text text-2xl">Rating</span>
            <Rating
              style={{ maxWidth: 250 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-full"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
