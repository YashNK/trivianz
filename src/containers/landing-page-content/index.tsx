import { useNavigate } from "react-router-dom";
import LandingPageImage from "../../assets/images/landing-page-image.jpg";
import "./landing-page-content.scss";
import { Locations } from "../../constants/locations";

export const LandingPageContent: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing_page_content flex_1_1_10 d-flex flex-column align-items-center justify-content-center">
        <div className="line_height_30 font_60 font_weight_medium">
          Welcome to
        </div>
        <div className="font_60 font_weight_medium">TRIVIANZ</div>
        <div className="line_height_30 font_18 font_weight_medium">
          Become a Member
        </div>
        <div>
          <button className="primary_btn mt-2">Contact here</button>
          <button
            onClick={() => navigate(Locations.MEMBERS_DIRECTORY)}
            className="secondary_btn mt-2 ml-2"
          >
            Members Directory
          </button>
        </div>
        <img className="landing_page_image" src={LandingPageImage} />
      </div>
    </>
  );
};
