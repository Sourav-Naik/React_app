import React from "react";

export default function About(props) {
  return (
    <div className="container-xl align-self-start mt-1">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div
          className={`accordion-item ${
            props.mode === "light" ? "bg-info" : "bg-dark"
          } text-white`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                props.mode === "light" ? "bg-info" : "bg-dark"
              } text-white fw-semibold`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              About project
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              This project Use React.js, React-router-dom. All the backend data
              was fetched from{" "}
              <a href="https://fakestoreapi.com/docs" target="main">
                https://fakestoreapi.com/docs
              </a>
            </div>
          </div>
        </div>
        <div
          className={`accordion-item ${
            props.mode === "light" ? "bg-info" : "bg-dark"
          } text-white`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                props.mode === "light" ? "bg-info" : "bg-dark"
              } text-white fw-semibold`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Nothing to read
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Please don't mind this section.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
