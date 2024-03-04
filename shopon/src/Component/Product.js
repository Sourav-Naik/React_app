import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
export default function Product(props) {
  const [products, setProducts] = useState(
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

  useEffect(() => {
    const itemsUrl = "https://fakestoreapi.com/products";
    const fetchData = async () => {
      try {
        let itemsData = await fetch(itemsUrl);
        itemsData = await itemsData.json();
        setProducts(
          itemsData.map((element) => {
            return (
              <div key={element.id} className={`col-3 p-0`}>
                <div className={`p-2 h-100`}>
                  <div
                    className={`d-flex flex-column justify-content-evenly border rounded p-2 h-100 bg-white text-dark`}
                  >
                    <Link to="/ItemPageFunction" className="h-100 d-flex">
                      <img
                        src={element.image}
                        alt={`${element.title.slice(0, 10)}...`}
                        className="w-100 border rounded p-2"
                      />
                    </Link>
                    <div className="d-flex align-item-center justify-content-between">
                      <Link
                        to="/ItemPageFunction"
                        className="w-100 title"
                      >{`${element.title}`}</Link>
                      <div className="d-flex flex-nowrap align-items-center">
                        {element.rating.rate <= 1 ? (
                          <div className="d-flex flex-nowrap align-items-center">
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-regular fa-star" />
                            <i className="star fa-regular fa-star" />
                            <i className="star fa-regular fa-star" />
                            <i className="star fa-regular fa-star" />
                          </div>
                        ) : element.rating.rate <= 2 ? (
                          <div className="d-flex flex-nowrap align-items-center">
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-regular fa-star" />
                            <i className="star fa-regular fa-star" />
                            <i className="star fa-regular fa-star" />
                          </div>
                        ) : element.rating.rate <= 3 ? (
                          <div className="d-flex flex-nowrap align-items-center">
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-regular fa-star" />
                            <i className="star fa-regular fa-star" />
                          </div>
                        ) : element.rating.rate <= 4 ? (
                          <div className="d-flex flex-nowrap align-items-center">
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-regular fa-star" />
                          </div>
                        ) : (
                          <div className="d-flex flex-nowrap align-items-center">
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-solid fa-star" />
                            <i className="star fa-regular fa-star-half-stroke" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-nowrap pt-1">
                      <div className="w-100">
                        <button
                          type="button"
                          className="badge text-bg-primary text-wrap p-1 d-inline-flex align-items-center"
                          onClick={() => {
                            let a = document.getElementById(
                              element.id
                            ).innerText;
                            let price = "price" + element.id;
                            var b;
                            a <= 1
                              ? console.log()
                              : (document.getElementById(element.id).innerText =
                                  --a);
                            b =
                              element.price *
                              document.getElementById(element.id).innerText;
                            b = b.toString();
                            b = b.slice(0, 6);
                            document.getElementById(price).innerText = `$` + b;
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span id={element.id} className="px-1">
                          1
                        </span>
                        <button
                          type="button"
                          className="badge text-bg-primary text-wrap p-1 d-inline-flex align-items-center"
                          onClick={() => {
                            let a = document.getElementById(
                              element.id
                            ).innerText;
                            let price = "price" + element.id;
                            document.getElementById(element.id).innerText = ++a;
                            var b =
                              element.price *
                              document.getElementById(element.id).innerText;
                            b = b.toString();
                            b = b.slice(0, 6);
                            document.getElementById(price).innerText = `$` + b;
                          }}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div className="align-self-end align-items-end d-flex">
                        <div id={`price${element.id}`}>${element.price}</div>
                        <div>
                          <i className="fa-solid fa-cart-plus ms-2 fs-4 text-success"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return <div className="row mx-5 my-1">{products} </div>;
}
