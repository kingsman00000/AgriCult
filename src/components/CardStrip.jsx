import React from "react";
import Card from "./Card";
import "./cardStrip.css";

import { Crop_Categories } from "../components/Crop_Categories";
const CardStrip = () => {
  return (
    <div className="Card-strip grid grid-cols-4 gap-y-8 my-4 mb-8">
      {Crop_Categories.map((a) => (
        <Card imgUrl={a.imgUrl} data={a.title} />
      ))}
    </div>
  );
};

export default CardStrip;
