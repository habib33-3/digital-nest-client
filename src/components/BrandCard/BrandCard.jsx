import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { thumbnail, brand_name } = brand;

  return (
    <div>
      <Link to={`/brand/${brand_name}`}>
        <div>
          <div
            className="hero card shadow-xl"
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{brand_name}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
