import PropTypes from "prop-types";
const BestSellerCard = ({ image, category, price }) => {
  return (
    <div className="container-best-seller">
      <div className="card-container">
        <div className="image-container">
          <img src="../../../women.jpeg" alt="" />
        </div>

        <div className="content-container">
          <p>Lorem ipsum</p>
          <span>155555</span>
        </div>

        <div className="select-colors">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

BestSellerCard.prototypes = {
  category: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};

export default BestSellerCard;
