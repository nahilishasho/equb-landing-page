import React from "react";
import { useEffect,useState } from "react";
import api from "../api/page";
export const Header = (props) => {
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const response = await api.get("/Header");
        setHeader(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error : ${err.message}");
        }
      }
    };
    fetchHeader();
  });
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {header.title}
                  <span></span>
                </h1>
                <p>{header.paragraph}</p>
                <a
                  style={{ marginRight: "30px" }}
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
                <a
                  href="#downloads"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Downlaod
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
