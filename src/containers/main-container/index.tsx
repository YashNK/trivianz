import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import "./main-container.scss";

export const MainContainer: React.FunctionComponent = () => {
  return (
    <div className="main_container">
      <Header />
      <div className="main_content">
        <Outlet />
      </div>
    </div>
  );
};
