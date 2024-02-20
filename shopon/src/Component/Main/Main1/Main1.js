import React, { useRef, useState } from "react";
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
  const [hidden, setHidden] = useState("hidden");
  const ref = useRef();
  const scroll = (side) => {
    if (scrollPosition <= 0 && side === -1) {
      setScrollPosition(ref.current.offsetWidth);
      ref.current.scrollLeft = ref.current.offsetWidth;
    } 
    else if (scrollPosition >= ref.current.offsetWidth && side === 1) {
      setScrollPosition(0);
      ref.current.scrollLeft = 0;
    } 
    else if (scrollPosition >= 0 && side === -1) {
      const newScrollPosition = scrollPosition - ref.current.offsetWidth / 2;
      setScrollPosition(newScrollPosition);
      ref.current.scrollLeft = newScrollPosition;
    } 
    else if (scrollPosition <= ref.current.offsetWidth && side === 1) {
      const newScrollPosition = scrollPosition + ref.current.offsetWidth / 2;
      setScrollPosition(newScrollPosition);
      ref.current.scrollLeft = newScrollPosition;
    }
  };
  const show = () =>{
setHidden("show");
  }
  const hide = () =>{
    setHidden("hidden");
  }


  return (
    <div className="container p-0 d-flex text-center justify-content-center align-items-center bg-info hori" onMouseEnter={show} onMouseLeave={hide}>
      <div
        className={`scroll d-flex align-items-center border-0 rounded-end me-3 h-50 ${hidden}`}
        onClick={() => {
          scroll(-1);
        }}
      >
        <i className="fa-solid fa-chevron-left fs-5 text-secondary"></i>
      </div>

      <div className="row flex-nowrap align-items-center pe-3" ref={ref}>
        <ItemFunction title="Mobiles" img={smartphone_img} link="/" />
        <ItemFunction title="Clothes" img={clothing_img} link="/" />
        <ItemFunction title="Laptops" img={laptop_img} link="/" />
        <ItemFunction title="Bags" img={bags_img} link="/" />
        <ItemFunction title="Audios" img={sound_img} link="/" />
        <ItemFunction title="Grocery" img={grocery_img} link="/" />
        <ItemFunction title="Furniture" img={furniture_img} link="/" />
        <ItemFunction title="Appliances" img={homeappliances_img} link="/" />
      </div>

      <div
        className={`scroll d-flex align-items-center border-0 rounded-start ms-0 ${hidden}`}
        onClick={() => {
          scroll(1);
        }}
      >
        <i className="fa-solid fa-chevron-right fs-5 text-secondary"></i>
      </div>
    </div>
  );
}
