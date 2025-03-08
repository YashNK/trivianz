import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.scss";
import "./assets/color.scss";

export const App: React.FunctionComponent = () => {
  return <RouterProvider router={routes} />;
};
