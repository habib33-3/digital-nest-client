import { BiTrash } from "react-icons/bi";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartCard = ({ product, products, setProducts }) => {
  const { _id, productImg, productType, productName, productPrice } = product;

  const handleDeleteCart = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://digital-nest-backend.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = products.filter(
                (product) => product._id !== _id
              );
              setProducts(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-primary px-2 py-5 rounded-sm">
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
              onClick={handleDeleteCart}
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
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default CartCard;
