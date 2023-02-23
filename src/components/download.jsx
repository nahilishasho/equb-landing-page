import Button from "@mui/material/Button";

import Link from '@mui/material/Link';
import React, { useState, useEffect } from "react";
import api from "../api/page";
// import image from "../../public/img/handPhone.PNG"
export const Download = (props) => {
  // To fetch data from api
  const [downloads, setDownloads] = useState([]);
  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await api.get("/Downloads");
        setDownloads(response.data);
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
    fetchDownloads();
  });
  return (
    <div id="downloads">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/download.jpg"
              className="img-responsive"
              alt="download image"
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{ marginBottom: "60px" }}>Download Our Latest App</h2>
            
              <Button
               href={downloads ? downloads.play : "/"}
                variant="outlined"
                style={{
                  width: "300px",
                  height: "100px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
                
              >
                {" "}
                <img
                  src="img/googlePlay.png"
                  style={{ width: "100px" }}
                  alt="download image"
                />{" "}
                Available on Google Play
              </Button>

              <Button
                variant="outlined"
                style={{
                  width: "300px",
                  height: "100px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
                href={downloads ? downloads.app : "/"}
              >
                <img
                  src="img/AppleLogo.png"
                  style={{ width: "70px" }}
                  alt="download image"
                />{" "}
                Available on App Store
              </Button>
              
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
