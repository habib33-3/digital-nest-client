import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  const { id, thumbnail, name } = brand;

  return (
    <div
      className="hero card shadow-xl"
      style={{
        backgroundImage: `url(${thumbnail})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
