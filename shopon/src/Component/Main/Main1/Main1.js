import React, { useState } from "react";

import {CSSTransition, TransitionGroup} from "react-transition-group";
import Items0 from "./Items0/Items0";
import Items1 from "./Items1/Items1";
import Items2 from "./Items2/Items2";
import Items3 from "./Items3/Items3";
import Items4 from "./Items4/Items4";
import Items5 from "./Items5/Items5";
import Items6 from "./Items6/Items6";
import Items7 from "./Items7/Items7";
import Items8 from "./Items8/Items8";
import "./Main1.css";
export default function Main1() {
  let a = <Items0 />;
  let b = <Items1 />;
  let c = <Items2 />;
  let d = <Items3 />;
  let e = <Items4 />;
  let f = <Items5 />;
  let g = <Items6 />;
  let h = <Items7 />;
  let i = <Items8 />;
  const [count, setCount] = useState(a);
  let next = () => {
    if (count.type.name === "Items0") {
      setCount(b);
    } else if (count.type.name === "Items1") {
      setCount(c);
    } else if (count.type.name === "Items2") {
      setCount(d);
    } else if (count.type.name === "Items3") {
      setCount(e);
    } else if (count.type.name === "Items4") {
      setCount(f);
    } else if (count.type.name === "Items5") {
      setCount(g);
    } else if (count.type.name === "Items6") {
      setCount(h);
    } else if (count.type.name === "Items7") {
      setCount(i);
    } else if (count.type.name === "Items8") {
      setCount(a);
    }
  };
  let previous = () => {
    if (count.type.name === "Items0") {
      setCount(i);
    } else if (count.type.name === "Items8") {
      setCount(h);
    } else if (count.type.name === "Items7") {
      setCount(g);
    } else if (count.type.name === "Items6") {
      setCount(f);
    } else if (count.type.name === "Items5") {
      setCount(e);
    } else if (count.type.name === "Items4") {
      setCount(d);
    } else if (count.type.name === "Items3") {
      setCount(c);
    } else if (count.type.name === "Items2") {
      setCount(b);
    } else if (count.type.name === "Items1") {
      setCount(a);
    }
  };
  return (
    <div className="container d-flex justify-content-center bg-info p-0 mt-3">
      <button
        className="previous border-0 rounded-end me-4 my-5 px-2"
        onClick={previous}
      >
        <i className="fa-solid fa-chevron-left fs-5 text-secondary"></i>
      </button>
      <div className="slider container">
        <TransitionGroup>
          <CSSTransition key={count} timeout={1000} >
          <div className="conatiner">{count}</div>
          </CSSTransition>
          </TransitionGroup>
        </div>
      <button
        className="next border-0 rounded-start ms-4 my-5 px-2"
        onClick={next}
      >
        <i className="fa-solid fa-chevron-right fs-5 text-secondary"></i>
      </button>
    </div>
  );
}
