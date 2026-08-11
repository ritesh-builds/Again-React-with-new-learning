import React from "react";
import ReactDOM from "react-dom/client";
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'

import Body from "./components/Body";
import FoodCard from "./components/FoodCard";
import Header from "./components/Header";
import ResList from "./components/ResList";
import Footer from "./components/Footer";

const AppLayout = () => {
    const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
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


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
