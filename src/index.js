import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import App from "./App";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Footer />
  </>
);
