import React from "react";
import ReactDOM from "react-dom/client";
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, CreateBrowserRouter } from "react-router-dom";



const AppLayout = () => {
  const lenis = useLenis((lenis) => {
  // called every scroll
  // console.log(lenis)
  })

  return (
    <>
       <ReactLenis root />  
      <Header />
      <Body />
      <Footer />      
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />
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
    path: "/login",
    element: <LoginPage />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
