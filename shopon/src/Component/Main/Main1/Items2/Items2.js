import React from "react";
import ItemFunction from "../ItemFunction/ItemFunction";
import furniture_img from "../../../../Image/Main1/furniture_img.jpg";
import sound_img from "../../../../Image/Main1/sound_img.jpg";
import laptop_img from "../../../../Image/Main1/laptop_img.jpg";
import grocery_img from "../../../../Image/Main1/grocery_img.jpg";
import homeappliances_img from "../../../../Image/Main1/homeappliances_img.jpg";

export default function Items2() {
  return (
    <div className="text-center fw-semibold fs-6 mt-3">
      <div className="row flex-nowrap">
        <ItemFunction title="Laptops" img={laptop_img} link="/" />
        <ItemFunction title="Appliances" img={homeappliances_img} link="/" />
        <ItemFunction title="Grocery" img={grocery_img} link="/" />
        <ItemFunction title="Audios" img={sound_img} link="/" />
        <ItemFunction title="Furniture" img={furniture_img} link="/" />
      </div>
    </div>
  );
}