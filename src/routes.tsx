import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/rootPage";
import HomePage from "./pages/homePage";
import WorkspacePage from "./pages/workspacePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "workspace",
        element: <WorkspacePage />,
      },
    ],
  },
]);

export default router;
