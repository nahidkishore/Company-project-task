import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark pt-5 ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1>Brand Logo</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.42em" }}>
            <li className="nav-item active">
              <Link className="nav-link  mr-2" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link  mr-2 " to="/deposit">
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/loans">
                Loans
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/investor">
                Investor Relations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/career">
                Careers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mr-2" to="/sohayota">
                Sohayota
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
