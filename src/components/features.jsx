import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import api from "../api/page";

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
  return (
    <div>
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Awesome Features that our customers love!</h2>
          </div>
        </div>
      </div>
      <div id="features" className="text-center">
        <div className="container">
          <Slider {...settings} style={{ height: "250px" }} className="row">
            {features.map((feature) => (
              <div key={feature.title} className="col-xs-6 col-md-3">
                {" "}
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
