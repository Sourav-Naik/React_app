import React from "react";
import ItemFunction from "../ItemFunction/ItemFunction";
import smartphone_img from "../../../../Image/Main1/smartphone_img.jpg";
import clothing_img from "../../../../Image/Main1/clothing_img.jpg";
import laptop_img from "../../../../Image/Main1/laptop_img.jpg";
import grocery_img from "../../../../Image/Main1/grocery_img.jpg";
import homeappliances_img from "../../../../Image/Main1/homeappliances_img.jpg";

export default function Items0() {
  return (
    <div className="text-center fw-semibold fs-6 mt-3">
      <div className="row flex-nowrap">
        <ItemFunction title="Mobiles" img={smartphone_img} link="/" />
        <ItemFunction title="Clothes" img={clothing_img} link="/" />
        <ItemFunction title="Laptops" img={laptop_img} link="/" />
        <ItemFunction title="Appliances" img={homeappliances_img} link="/" />
        <ItemFunction title="Grocery" img={grocery_img} link="/" />
      </div>
    </div>
  );
}
