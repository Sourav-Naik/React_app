import React from "react";
import Title from "../../Title/Title";
import { Link, NavLink } from "react-router-dom";
export default function Navbar(props) {
  const pending =
    "nav-link text-white  p-0 px-2 mt-2 lh-2 fs-6 border border-1 rounded d-inline-flex";
  const active = `nav-link text-white p-0 px-2 mt-2 lh-2 fw-semibold fs-5 border border-3 rounded d-inline-flex`;
  return (
    <div>
      <nav
        id="navbar"
        className={`navbar position-relative bg-${
          props.mode === "light" ? "info" : "dark"
        } d-flex flex-nowrap px-2 py-1`}
      >
        {/* offcanvas */}
        <button
          className={`btn btn-outline-light py-1 px-2 me-2 border-3`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fs-4 pt-1" />
        </button>
        <div
          className="offcanvas offcanvas-start w-25"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div
            className={`offcanvas-header bg-${
              props.mode === "light" ? "info" : "dark"
            } text-white border-bottom p-0 px-2`}
          >
            <Title mode={props.mode} />
            <button
              type="button"
              className="btn-close bg-white me-1"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div
            className={`offcanvas-body bg-${
              props.mode === "light" ? "info" : "dark"
            }`}
          >
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? active : pending
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isActive ? active : pending
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isActive ? active : pending
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* logo */}
        <Title mode={props.mode} />
        {/* search bar */}

        <div className="w-75 m-0 me-1 rounded-pill bg-white">
          <form className="d-flex" role="search">
            <input
              className="form-control rounded-start-pill border-0 p-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div
              className={`btn btn-outline-${
                props.mode === "light" ? "info" : "dark"
              } rounded-end-pill border-0`}
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass p-0 m-0 fs-4 align-middle "></i>
            </div>
          </form>
        </div>

        {/* Login */}
        <div className="d-flex flex-nowrap m-0 me-1">
          <Link
            to="/login"
            className={`btn btn-outline-light fw-bolder border-3 d-flex flex-nowrap align-items-center p-2`}
            type="submit"
          >
            <i className="fa-solid fa-user fs-5 me-1"></i>
            <sub className="fs-6 ">Login</sub>
          </Link>
        </div>

        {/* cart  */}
        <div className="d-flex flex-nowrap m-0 me-1">
          <Link
            to="/cart"
            className={`btn btn-outline-light fw-bolder border-3 d-flex flex-nowrap align-items-center p-2`}
            type="submit"
          >
            <i className="fa-solid fa-cart-arrow-down fs-5 me-1"></i>
            <sub className="fs-6">Cart</sub>
          </Link>
        </div>
        {/*Darkmode toggler*/}

        <span
          className={`form-switch border rounded border-3 border-light align-items-center ps-5 lh-1 py-2`}
        >
          <input
            className={`form-check-input mt-1 ${
              props.mode === "dark" ? "bg-dark" : ""
            }`}
            style={{ cursor: "pointer" }}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className={`text-light fw-bolder px-1 mt-1 `}
            style={{ cursor: "pointer" }}
            htmlFor="flexSwitchCheckDefault"
          >
            Darkmode
          </label>
        </span>
      </nav>
    </div>
  );
}
