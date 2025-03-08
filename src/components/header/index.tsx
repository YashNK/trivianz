import Logo from "../../assets/images/trivianzs-logo-black.png";
import "./header.scss";

export const Header: React.FunctionComponent = () => {
  return (
    <div className="landing_page_header_container">
      <div className="font_weight_medium font_18">Trivianzs Ladies</div>
      <img src={Logo} className="header_logo" />
    </div>
  );
};
