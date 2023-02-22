import React from "react";
import  { useState, useEffect } from "react";
import api from "../api/page";
export const Services = (props) => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await api.get("/Services");
        setSteps(response.data);
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
    fetchSteps();
  });
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>How to start using MyEqub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
