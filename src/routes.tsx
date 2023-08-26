import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/rootPage";
import HomePage from "./pages/homePage";
import DocumentPage from "./pages/DocumentPage";

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
        path: "document/:id",
        element: <DocumentPage />,
      },
    ],
  },
]);

export default router;
