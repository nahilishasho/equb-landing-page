import React from "react";
import { Image } from "./image";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Image>{props.data ? props.data.iqubImage : "Loading"}</Image>
          <a className="navbar-brand page-scroll">
            MyEkub
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a className="page-scroll"  href="#page-top">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                ScreenShoots
              </a>
            </li>

            <li>
              <a href="#services" className="page-scroll">
                Steps
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#downloads" className="page-scroll">
                Download
              </a>
            </li>

            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}

            <li>
              <a href="#contact" className="page-scroll">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
