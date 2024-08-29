import PropTypes from "prop-types";
const CategoryCard = ({ category, img, items }) => {
  return (
    <div className="container-collection">
      <img src={img} alt={category} />
      <h5>{category}</h5>
      <span>{items}</span>
    </div>
  );
};

CategoryCard.prototypes = {
  category: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};

export default CategoryCard;
