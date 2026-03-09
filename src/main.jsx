import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Wishlist from "./Components/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
