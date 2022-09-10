import React from "react";
import Home from "./pages/homePage/Home";
import NotFound from "./pages/homePage/notFound/NotFound";
let myRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
        path: '/*',
        element: <NotFound />,

    },
  ];

export default myRoutes