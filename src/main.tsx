import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Root from "./layout/root";
import Home from "./pages/home";
import Styler from "./styles";
import "./styles/css/index.css";
import "./styles/css/color.css";
import "./styles/css/icons/google-icons.css";
import "./styles/css/icons/tenox-icons.css";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <div className="p-2rem">Error</div> },
      {
        path: "/components",
        element: (
          <div className="mt-5rem">
            Its docs page
            <div>
              <Outlet />
            </div>
          </div>
        ),
        children: [{ index: true, element: <>Welcome to docs page</> }]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Styler>
      <RouterProvider router={router} />
    </Styler>
  </React.StrictMode>
);
