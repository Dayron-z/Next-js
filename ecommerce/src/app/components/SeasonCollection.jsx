import CategoryCard from "./CategoryCard";

const SeasonCollection = ({}) => {
  const categories = [
    { category: "Women´s", items: "items 10", img: "../../../women.jpeg" },
    { category: "Women´s", items: "items 10", img: "../../../women.jpeg" },
    { category: "Women´s", items: "items 10", img: "../../../women.jpeg" },
    { category: "Women´s", items: "items 10", img: "../../../women.jpeg" },
    { category: "Women´s", items: "items 10", img: "../../../women.jpeg" },
    { category: "Women´s", items: "items 10", img: "../../../women.jpeg" },
  ];

  return (
    <div className="season-collection">
      <div className="info">
        <h2>Season collection</h2>
        <span>View all categories</span>
      </div>
      <div className="image-collection">
        {categories.map((categoryData, index) => (
          <CategoryCard
            key={index}
            category={categoryData.category}
            items={categoryData.items}
            img={categoryData.img}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonCollection;
