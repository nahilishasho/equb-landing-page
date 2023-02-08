import React from "react";
import Button from '@mui/material/Button';
// import image from "../../public/img/handPhone.PNG"
export const Download = (props) => {
  return (
    <div id="downloads">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/download.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style = {{marginBottom :"60px"}}>Download Our Latest App</h2>
             
             
              {/* <button type="submit" className="btn btn-custom btn-lg " style = {{marginBottom : "10px"}}>
                Available On App Store
              </button>
              <button type="submit" className="btn btn-custom ">
                Available On Play Store
              </button>
              <div></div> */}
              <Button variant="outlined" style = {{width : "300px" , height : "100px" , fontWeight : "bold", fontSize : "15px", marginBottom : "20px"}}>Available on the App Store</Button>
              <Button variant="outlined" style = {{width : "300px" , height : "100px" , fontWeight : "bold", fontSize : "15px"}}>Available on the App Store</Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
