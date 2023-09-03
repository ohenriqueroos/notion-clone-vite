import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/rootPage";
import HomePage from "./pages/homePage";
import DocumentPage from "./pages/DocumentPage";
import Teste from "./pages/Teste";

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
      {
        path: "teste",
        element: <Teste />,
      },
    ],
  },
]);

export default router;
