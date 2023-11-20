import React from "react";
import { Nav, Footer } from "../components/layout";
import {
  Smart,
  Recommend,
  Product,
  Recommend2,
  Arrival,
  Joinus,
} from "../components/home/index";

const Homescreen = () => {
  return (
    <div>
      <Nav />
      <Smart />
      <Product />
      <Recommend />
      <Recommend2 />
      <Arrival />
      <Joinus />

      <Footer />
    </div>
  );
};

export default Homescreen;
