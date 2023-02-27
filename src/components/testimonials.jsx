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
export const Testimonials = (props) => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("/feedbacks");
        setTestimonials(response.data);
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
    fetchTestimonials();
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
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{testimonials? <>Testimonials</> : "" }</h2>
        </div>
        <div className="row">
        <Slider {...settings}  style = {{height : "200px"}}>
          {testimonials?.map((testimonial, i) => (
                <div key={`${testimonial.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    {/* <div className="testimonial-image">
                      {" "}
                      <img src={testimonial.img} alt="" />{" "}
                    </div> */}
                    <div className="testimonial-content">
                      <p>"{testimonial.message}"</p>
                      <div className="testimonial-meta"> - {testimonial.name} </div>
                    </div>
                  </div>
                </div>
              ))
            }</Slider>
        </div>
      </div>
    </div>
  );
};
