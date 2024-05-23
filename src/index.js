import React from "react";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Kids from "./Pages/Kids";
import Wemon from "./Pages/Wemon";
import Man from "./Pages/Man";
import Buty from "./Pages/Buty";
import Electronic from "./Pages/Electronic";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },

      {
        path: "buty",
        element: <Buty />,
      },
      {
        path: "man",
        element: <Man />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      {
        path: "electroic",
        element: <Electronic />,
      },

      {
        path: "wemon",
        element: <Wemon />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
