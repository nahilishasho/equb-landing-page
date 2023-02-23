import React, { useState, useEffect } from "react";
import api from "../api/page";

export const Testimonials = (props) => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("/Testimonials");
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
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Testimonials</h2>
        </div>
        <div className="row">
          {testimonials?.map((testimonial, i) => (
                <div key={`${testimonial.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={testimonial.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{testimonial.text}"</p>
                      <div className="testimonial-meta"> - {testimonial.name} </div>
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
