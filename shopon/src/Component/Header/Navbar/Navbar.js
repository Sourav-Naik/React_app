import React from "react";
import Title from "../../Title/Title";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar position-relative bg-dark navbar-dark flex-nowrap min-vw-100 px-2 py-1">
        <div className="container p-0">
          {/* logo */}
          <Title />
          {/* search bar */}
          <div className="w-75 m-0 me-1 rounded-pill bg-white">
            <form className="d-flex" role="search">
              <input
                className="form-control rounded-start-pill border-0 p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a
                href="/"
                className=" btn btn-outline-info rounded-end-pill border-0"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass p-0 m-0 fs-4  align-middle "></i>
              </a>
            </form>
          </div>
          {/* user info */}
          <div className="d-flex flex-nowrap m-0 me-1">
            <a
              href="/"
              className="btn btn-outline-info fw-bolder border-3 d-flex flex-nowrap align-items-center p-2"
              type="submit"
            >
              <i className="fa-solid fa-user fs-5 me-1"></i>
              <sub className="fs-6 ">Login</sub>
            </a>
          </div>
          {/* cart  */}
          <div className="d-flex flex-nowrap m-0 me-1">
            <a
              href="/"
              className="btn btn-outline-info fw-bolder border-3 d-flex flex-nowrap align-items-center p-2"
              type="submit"
            >
              <i className="fa-solid fa-cart-arrow-down fs-5 me-1"></i>
              <sub className="fs-6">Cart</sub>
            </a>
          </div>
          {/* offcanvas */}
          <button
            className="navbar-toggler p-2 m-0 mx-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-white fs-3" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-dark text-white">
              <Title />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body bg-dark">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active fs-4"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
