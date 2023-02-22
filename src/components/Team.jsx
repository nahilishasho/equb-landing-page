import React, { useState, useEffect } from "react";
import api from "../api/page";

export const Team = (props) => {
  const [screens, setScreens] = useState([]);
  useEffect(() => {
    const fetchScreens = async () => {
      try {
        const response = await api.get("/Team");
        setScreens(response.data);
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
    fetchScreens();
  });
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Some Screenshots of the app</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div id="row">
          {screens?.map((screen, i) => (
                <div key={`${screen.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={screen.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{screen.name}</h4>
                      <p>{screen.job}</p>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};
