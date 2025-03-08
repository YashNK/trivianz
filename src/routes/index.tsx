import { createBrowserRouter } from "react-router-dom";
import { Locations } from "../constants/locations";
import { MemberDirectory } from "../containers/members-directory";
import { LandingPageContent } from "../containers/landing-page-content";
import FlipBook from "../containers/flip-book";

export const routes = createBrowserRouter([
  {
    path: Locations.LANDING_PAGE,
    element: <FlipBook />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: Locations.LANDING_PAGE,
        element: <LandingPageContent />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: Locations.MEMBERS_DIRECTORY,
        element: <MemberDirectory />,
        errorElement: <div>404 Not Found</div>,
      },
    ],
  },
]);
