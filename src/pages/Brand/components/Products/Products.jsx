import PropTypes from "prop-types";
import Product from "./Product/Product";


const Products = ({ products }) => {
  return (
    <div className="my-10 bg-primary p-5 rounded-xl ">
      <h1 className="text-center font-bold text-5xl text-content my-2">
        Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center max-w-6xl mx-auto mt-5 gap-6">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
