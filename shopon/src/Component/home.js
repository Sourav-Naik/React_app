import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Style.css";
export default function Home(props) {
  const [categories, setCategories] = useState(<div></div>);
  useEffect(() => {
    const itemsUrl = "https://fakestoreapi.com/products/categories";
    const fetchData = async () => {
      try {
        let itemsData = await fetch(itemsUrl);
        itemsData = await itemsData.json();

        setCategories(
          itemsData.map((element) => {
            return (
              <Link
                to="/ItemPageFunction"
                key={element}
                className={`text-decoration-none text-white col-3 border border-1 rounded bg-${
                  props.mode === "dark" ? "dark" : "info"
                }`}
              >
                <img src=".../" alt={element} className="w-100" />
                <br className="lh-1" />
                <span className="lh-1">{element}</span>
              </Link>
            );
          })
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="conatiner m-2">
      <div className="row mx-4"> {categories}</div>
      <Product props={props.mode} />;
    </div>
  );
}
