import { BiTrash } from "react-icons/bi";
import PropTypes from "prop-types";

const CartCard = ({ product }) => {
  const { productImg, productType, productName, productPrice } = product;

  return (
    <div>
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
          src={productImg}
          alt={productName}
        />
        <div className="flex w-full flex-col justify-between pb-4">
          <div className="flex w-full justify-between space-x-2 pb-2">
            <div className="space-y-1">
              <div>
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {productName}
              </h3>
            </div>
            <div className="">
              <p className="text-md font-semibold">{productType}</p>
            </div>
              </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{productPrice}$</p>
            </div>
          </div>
          <div className="flex divide-x text-sm">
            <button
              type="button"
              className="flex items-center space-x-2 px-2 py-1 pl-0"
            >
              <BiTrash className="text-3xl font-bold" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
};

export default CartCard;
