import React from "react";
import '../style.css';
import ReactDOM from "react-dom/client";
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntMenu from "./components/RestrauntMenu";

const AppLayout = () => {
  const lenis = useLenis((lenis) => {
  // called every scroll
  // console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />  
      <Header />
      <Outlet />
      <Footer />      
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/restraunts/:resId",
        element: <RestrauntMenu/>
      },

      {
        path: "/login",
        element: <LoginPage />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter} /> 
);
