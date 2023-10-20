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
    <div className="card flex flex-col justify-between p-5 w-full h-[600px] space-y-3  lg:w-96 mx-auto bg-gray-100 pb-10">
      <img
        src={productImg}
        alt={productName}
        className="w-11/12 mx-auto"
      />
      <div>
        <h1 className="text-blue-600 text-2xl font-medium">{productName}</h1>
        <h2 className="text-xl text-blue-600/70"> Brand: {brandName}</h2>
        <h3 className="text-lg text-blue-600/60"> Type: {productType}</h3>
        <p className="text-gray-700 text-justify ">{productDescription} </p>
      </div>
      <Rating
        value={rating}
        isDisabled
        style={{ maxWidth: "200px" }}
      ></Rating>
      <p className="text-5xl font-bold text-gray-500">Price: {productPrice}$</p>
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
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
