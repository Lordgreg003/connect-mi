import React from "react";
import { Nav, Footer } from "../components/layout";
import { Smart, Recommend } from "../components/home";
import { Serice } from "../components/service/Index";
import { Prothings, Arrival } from "../components/products";

const Productscreen = () => {
  return (
    <div>
      <Nav />
      <Smart />
      <Serice />
      <Prothings />
      <Recommend />
      <Arrival />
      <Footer />
    </div>
  );
};

export default Productscreen;
