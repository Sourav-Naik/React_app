import React from "react";
import PropTypes from "prop-types";
export default function ItemFunction(props) {
  return (
    <div className="col">
      <a href={props.link} className="text-decoration-none text-light">
        <img src={props.img} alt={props.title} className="w-100" />
        <br />
        {props.title}
      </a>
    </div>
  );
}
ItemFunction.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
