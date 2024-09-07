import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Layout } from "./Layout/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
    errorElement: (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./image/error404.jpg"
          alt="error 404"
          width={750}
          height={500}
        />
        <h2>Такой страницы не существует!</h2>
        <button
          class="button button--primary button--large"
          style={{ fontSize: "25px" }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            НАЗАД
          </a>
        </button>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
