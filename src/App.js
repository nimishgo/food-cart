import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDom from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Errors from "./components/Errors";
import UserContext from "./utils/userStore";

/**
 *  * Headers
 *    * Logo
 *    * Search Bar
 *    * Nav items
 *  * body
 *    * SearchBar
 *    * Restaurant Cards
 *        * cards
 *          * Img
 *          * Name
 *          * Rating cuisine delivery time etc..
 *  * Footer
 *    * copyright
 *    * Aderess
 *    * Links
 */
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const data = useContext(UserContext);
  const [name, setname] = useState(data.userName);
  return (
    <UserContext.Provider value={{ userName: name, setname }}>
      <div className="app flex flex-col justify-between h-full ">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errors />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
