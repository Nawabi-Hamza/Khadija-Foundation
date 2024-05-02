import React, { useState, useEffect } from "react";
import { data } from "./SlideShowData";

function SlideShow() {
  const [show, setShow] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      setShow(data);
    }
  }, []);
  const button = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {/* <!-- Carousel Start --> */}
      <center>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark "
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          {show &&
            button.map((item) =>
              show.length >= item ? (
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={item}
                  aria-label={`Slide ${item}`}
                  key={item}
                ></button>
              ) : null
            )}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=auto"
              style={StyleSheet.slideImage}
              className="d-block w-100"
              alt="..."
              loading="lazy"
            />
            <div
              className="carousel-caption my-primary mb-3"
              style={StyleSheet.caption}
            >
              <h1 className="fw-bold text-white">
                <a href="https://www.paypal.com/donate/?hosted_button_id=AAVQAD3B6QZS6">
                  <button className="btn " id="custom-button">
                    Donate Now For Poor People
                  </button>
                </a>
              </h1>
              <p className="h1 fw-bold text-white">
                Welcome To Khadija Charity Foundation.
              </p>
            </div>
          </div>
          {show.map((items) => (
            <div
              className="carousel-item"
              key={items.slide_id}
              data-bs-interval="2000"
            >
              <img
                src={items.slide_image}
                style={StyleSheet.slideImage}
                loading="lazy"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption mb-3" style={StyleSheet.caption}>
                <h1 className="display-2 fw-bold text-white">
                  {items.slide_title}
                </h1>
                <p className="h4 text-white">{items.slide_descrption}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            id="corserButton"
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            id="corserButton"
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </center>
      
      {/* <!-- Carousel End --> */}
    </>
  );
}

export default SlideShow;

const StyleSheet = {
  slideImage: { maxHeight: "80vh", minHeight: "50vh",maxWidth:'1800px', objectFit: "cover" },
  caption: { backgroundColor: "#f4b083a0" },
  
};
