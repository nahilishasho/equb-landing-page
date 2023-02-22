import React from "react";
import { useEffect,useState } from "react";
import api from "../api/page"
export const Features = (props) => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await api.get("/Features");
        setFeatures(response.data);
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
    fetchFeatures();
  });
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Awesome Features that our customers love!</h2>
        </div>
        
        <div className="row">
          {features.map((feature) => (
                <div key={feature.title} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={feature.icon}></i>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))
            }
        </div>
        
      </div>
    </div>
  );
};
