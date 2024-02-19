import React from "react";
import ItemFunction from "../ItemFunction/ItemFunction";
import homeappliances_img from "../../../../Image/Main1/homeappliances_img.jpg";
import laptop_img from "../../../../Image/Main1/laptop_img.jpg";
import bags_img from "../../../../Image/Main1/bags_img.jpg";
import clothing_img from "../../../../Image/Main1/clothing_img.jpg";
import smartphone_img from "../../../../Image/Main1/smartphone_img.jpg";

export default function Items7() {
  return (
    <div className="text-center fw-semibold fs-6 mt-3">
      <div className="row flex-nowrap">
        <ItemFunction title="Bags" img={bags_img} link="/" />
        <ItemFunction title="Mobiles" img={smartphone_img} link="/" />
        <ItemFunction title="Clothes" img={clothing_img} link="/" />
        <ItemFunction title="Laptops" img={laptop_img} link="/" />
        <ItemFunction title="Appliances" img={homeappliances_img} link="/" />
      </div>
    </div>
  );
}
