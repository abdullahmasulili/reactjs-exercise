import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
