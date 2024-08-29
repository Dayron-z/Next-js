
import BestSeller from "./components/BestSeller";
import HomeBanner from "./components/HomeBanner";
import NavHome from "./components/NavHome";
import SeasonCollection from "./components/SeasonCollection";

const MyPage = () => {
  return (
    <div className="general-container home-section">
      <HomeBanner
        title="Summer Escapades"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat in non"
        detail="Shop collection"
      />
      <SeasonCollection/>
      <NavHome/>
      <BestSeller/>
    </div>
  );
};

export default MyPage;
