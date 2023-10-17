import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Add from "./Components/Add.jsx";
import Cart from "./Components/Cart.jsx";
import Details from "./Components/Details.jsx";
import Card from "./Components/Card.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/card/:brand",
        element: <Card />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
