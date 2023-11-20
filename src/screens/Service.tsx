import React from "react";
import { Nav, Footer } from "../components/layout";
import { Smart } from "../components/home";
import {
  Product,
  Recommended,
  Serice,
  Proscroll,
} from "../components/service/Index";

const Service = () => {
  return (
    <div>
      <Nav />
      <Serice />
      <Proscroll />
      <Smart />
      <Product />
      <Recommended />
      <Footer />
    </div>
  );
};

export default Service;
