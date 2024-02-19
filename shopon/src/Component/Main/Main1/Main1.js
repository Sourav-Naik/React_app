import React, { useRef, useState }  from "react";
import ItemFunction from "./ItemFunction/ItemFunction";
import smartphone_img from "../../../Image/Main1/smartphone_img.jpg";
import clothing_img from "../../../Image/Main1/clothing_img.jpg";
import laptop_img from "../../../Image/Main1/laptop_img.jpg";
import grocery_img from "../../../Image/Main1/grocery_img.jpg";
import homeappliances_img from "../../../Image/Main1/homeappliances_img.jpg";
import furniture_img from "../../../Image/Main1/furniture_img.jpg";
import sound_img from "../../../Image/Main1/sound_img.jpg";
import bags_img from "../../../Image/Main1/bags_img.jpg";
import "./mystyle.css";
export default function Main1() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

const handleScroll = (scrollAmount) => {
  const newScrollPosition = scrollPosition + scrollAmount;
  setScrollPosition(newScrollPosition);
  containerRef.current.scrollLeft = newScrollPosition;
};

  return (
    <div className="container-xxl d-flex justify-content-center bg-info p-0 mt-3">
        <button className="previous border-0 rounded-end me-4 my-5 px-2 Left" onClick={() => handleScroll(-350)}>
          <i className="fa-solid fa-chevron-left fs-5 text-secondary"></i>
        </button>
        <div className="container mt-3 bg-info p-0 pt-2 text-center hori">
        <div className="row flex-nowrap" ref={containerRef}>
          <ItemFunction title="Mobiles" img={smartphone_img} link="/" />
          <ItemFunction title="Clothes" img={clothing_img} link="/" />
          <ItemFunction title="Laptops" img={laptop_img} link="/" />
          <ItemFunction title="Appliances" img={homeappliances_img} link="/" />
          <ItemFunction title="Grocery" img={grocery_img} link="/" />
          <ItemFunction title="Audios" img={sound_img} link="/" />
          <ItemFunction title="Furniture" img={furniture_img} link="/" />
          <ItemFunction title="Bags" img={bags_img} link="/" />
        </div>
      </div>
        <button className="next border-0 rounded-start ms-4 my-5 px-2 Right"onClick={() => handleScroll(350)} >
          <i className="fa-solid fa-chevron-right fs-5 text-secondary"></i>
        </button>
    </div>
  );
}
