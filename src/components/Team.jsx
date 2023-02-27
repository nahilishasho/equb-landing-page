import React, { useState, useEffect } from "react";
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
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Some Screenshots of the app</h2>
        
        </div>
        </div>
        <div className="container">
        <div id="row">
        <Slider {...settings}  style = {{height : "600px"}}>
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
            </Slider>
        </div></div>
      </div>
   
  );
};
