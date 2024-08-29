import PropTypes from "prop-types";
import BestSellerCard from "./BestSellerCard";
const BestSeller = ({ image, category, price }) => {
  return (
    <div className="best-seller">
      <div className="card-container-best-seller">
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </div>
      <div>
        <span>Load more</span>
      </div>
    </div>
  );
};

BestSeller.prototypes = {
  category: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};

export default BestSeller;
