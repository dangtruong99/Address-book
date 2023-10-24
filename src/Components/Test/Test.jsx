import React from "react";
import Slider from "react-slick";
import "./test.css";

function Test({ image }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 1000,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {image.map((img) => (
          <img src={img} className="image-cat" alt="cat" />
        ))}
      </Slider>
    </div>
  );
}

export default Test;
