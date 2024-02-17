import React from "react";
import ItemFunction from "../ItemFunction/ItemFunction";
import furniture_img from "../../../../Image/Main1/furniture_img.jpg";
import sound_img from "../../../../Image/Main1/sound_img.jpg";
import bags_img from "../../../../Image/Main1/bags_img.jpg";
import grocery_img from "../../../../Image/Main1/grocery_img.jpg";
import smartphone_img from "../../../../Image/Main1/smartphone_img.jpg";

export default function Items4() {
  return (
    <div className="text-center fw-semibold fs-6 mt-3">
      <div className="row flex-nowrap">
        <ItemFunction title="Grocery" img={grocery_img} link="/" />
        <ItemFunction title="Audios" img={sound_img} link="/" />
        <ItemFunction title="Furniture" img={furniture_img} link="/" />
        <ItemFunction title="Bags" img={bags_img} link="/" />
        <ItemFunction title="Mobiles" img={smartphone_img} link="/" />
      </div>
    </div>
  );
}
