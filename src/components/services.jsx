import React from "react";
import  { useState, useEffect } from "react";
import api from "../api/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  background: "gray"  ,border : "true",  borderRadius : "20px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "gray",borderRadius : "20px" }}
      onClick={onClick}
    />
  );
}
export const Services = (props) => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
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
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
        <Slider {...settings}  style = {{height : "400px"}}>
          {steps?.map((step, i) => (
                <div key={`${step.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={step.icon}></i>
                  <div className="service-desc">
                    <h3>{step.name}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))
           }</Slider>
        </div>
      </div>
    </div>
  );
};
