import React from "react";
import "../home/Home.scss";
import dollars from "../../assets/dollarsonatable.jpg"
import dollarsonatable from "../../assets/dollarsonatable.jpg"
import moneytree from "../../assets/moneytrees1.jpg"

function Home() {
  return (
    <div className="container-lg">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <a href="" className="navbar-brand">
            <span>FreeFlow</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <a href="" className="nav-link active">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="" className="nav-link active">
                  Pricing
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="" className="nav-link active">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item mx-2 my-1">
                  <a href="" className="btn btn-outline-success">
                    Log in
                  </a>
                </li>
                <li className="nav-item mx-2 my-1">
                  <a href="" className="btn btn-success">
                    Sign up
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="landingSection1">
        <h1>
          Board the train to <span className="text-success">financial freedom</span>
        </h1>
        <a href="#" className="btn btn-success">Find out how</a>
      </div>
    </div>
  );
}

export default Home;
