import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";

import Cart from "./Components/Cart.jsx";
import Card from "./Components/Card.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Provider from "./Components/ContextProvider/Provider.jsx";
import Details from "./Components/Details.jsx";
import Updates from "./Components/Updates.jsx";
import AddProduct from "./Components/AddProduct.jsx";

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
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => fetch("http://localhost:5000/added"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/card/:brand",
        element: <Card />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/card/brand/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/brand/${params.id}`),
      },
      {
        path: "/card/update/:id",
        element: <Updates />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/brand/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
