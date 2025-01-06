// import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/homePage";
// import Contact from "./pages/contact";
import Error from "./pages/error";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import AppLayout from "../app-layout";
import RestaurantMenu from "./pages/restaurant-menu";
import Cart from "./pages/cart";

const RouterComponent = () => {
  const newRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        //   {
        //     path: "dashboard",
        //     element: <Contact />,
        //     loader: ({ request }) =>
        //       fetch("/api/dashboard.json", {
        //         signal: request.signal,
        //       }),
        //   },
        //   {
        //     path: "/",
        //     element: <Home />,
        //     children: [
        //       // {
        //       //   element: <AuthLayout />,
        //       //   children: [
        //       //     {
        //       //       path: "login",
        //       //       element: <Login />,
        //       //       loader: redirectIfUser,
        //       //     },
        //       //     {
        //       //       path: "logout",
        //       //       action: logoutUser,
        //       //     },
        //       //   ],
        //       // },
        //     ],
        //  },
      ],
    },
    // {
    //   path: "contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "about",
    //   element: <About />,
    // },
    // {
    //   path: "login",
    //   element: <Contact />,
    // },
  ]);
  return (
    <>
      <RouterProvider router={newRouter} />
    </>
  );
};

export default RouterComponent;
