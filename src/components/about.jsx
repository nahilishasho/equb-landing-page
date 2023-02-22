import React from "react";
import { useEffect, useState } from "react";
import api from "../api/page";
// import image from "../../public/img/handPhone.PNG"
export const About = (props) => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const response = await api.get("/About");
        setAbouts(response.data);
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
    fetchAbouts();
  });
  const renderList = abouts.Why?.map((about, index) => (
    <li key={index}>{about}</li>
  ));
  const renderList2 = abouts.Why2?.map((about, index) => 
  <li key={index}>{about}</li>
);
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/handPhone.PNG"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About MyEqub</h2>
              <p>{abouts.paragraph}</p>
              <h3>Why Use MyEqub App?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>{renderList}</ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>{renderList2}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
