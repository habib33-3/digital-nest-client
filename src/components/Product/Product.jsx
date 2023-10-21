import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    _id,
    productImg,
    productName,
    brandName,
    productType,
    productPrice,
    productDescription,
    rating,
  } = product;

  return (
    <div className="relative m-10 flex w-full  lg:w-96 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover"
          src={productImg}
          alt="product image"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h4 className="text-md font-medium text-primary">
            Brand: {brandName}
          </h4>
          <h5 className="text-xl tracking-tight text-secondary">
            {productName}
          </h5>
          <p className="text-sm">{productType}</p>
        </div>
        <div>
          <p className="text-justify text-neutral">{productDescription}</p>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-accent">
              ${productPrice}
            </span>
          </p>
          <div className="flex items-center">
            <Rating
              value={rating}
              isDisabled
              style={{ width: "100px" }}
            ></Rating>
            <span className="mr-2 ml-3 rounded bg-info px-2.5 py-0.5 text-xs text-info-content font-semibold">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex-end flex justify-between items-center">
          <div>
            <Link to={`/product/${_id}`}>
              <button className="btn btn-success">Details</button>
            </Link>
          </div>
          <div>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
