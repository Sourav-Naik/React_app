import React from "react";
import PropTypes from "prop-types";
export default function ItemFunction(props) {
  return (
    <div className="items col-3 border rounded p-2 pb-0 my-1 me-1">
      <a href={props.link} className="text-decoration-none text-light">
        <img src={props.img} alt={props.title} className="w-100" />
        <br className="lh-1" />
        <span className="lh-1">{props.title}</span>
      </a>
    </div>
  );
}
ItemFunction.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
