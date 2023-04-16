import React from "react";
import Card from "../components/Card";
import doraemon from "../assets/doraemon.png";
import CardStrip from "../components/CardStrip";
import CategoryStrip from "../components/CategoryStrip";
import SellerStrip from "../components/SellerStrip";
// import ProductPage from './ProductPage'
import ProductStrip from "../components/ProductStrip";

import DataCard from "../components/DataCard";
import DataCardd from "../components/DataCardd";
import DataCarddd from "../components/DataCarddd";

import { Equip_Categories } from "../components/Equip_Categories";

const Home = () => {
  return (
    <div>
      <CategoryStrip />
      <CardStrip />

      <SellerStrip />
      <ProductStrip />
      <div className="flex items-center justify-center my-6">
        <DataCard
          line1="Fresh Products"
          line2="Fresh Products available here at reasonable price"
        />
        <DataCardd
          line1="SUPPORT 24 X 7"
          line2="24 X 7 Online selling platform for agri produce"
        />
        <DataCarddd
          line1="Expert Support"
          line2="Get help from our Well Qualified Experts "
        />
      </div>
    </div>
  );
};

export default Home;
