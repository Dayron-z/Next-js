import PropTypes from "prop-types";

const HomeBanner = ({ title, description, detail }) => {
  return (
    <div className="banner-container">
      <div className="left-section">
        <div className="info-left-section">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="detail-button">
            <span>{detail}</span>
            <i className="bi bi-caret-right"></i>
          </div>
        </div>

        <div className="circles-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="right-section">
        <img src="../../../women.jpeg" alt="" />
      </div>
    </div>
  );
};

HomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default HomeBanner;
