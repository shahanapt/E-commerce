import React, { useState } from "react";
// import bg from "../../public/assets/images/bg.jpg";
import bgg from "../components/bgg.jpg";
import bg2 from "../components/bgggg.jpg";
import bg3 from "../components/elec.jpg";

import Products from "./Products";
import { Carousel } from "react-bootstrap";

function Home(args) {
  return (
    <div>
      <div className="card text-white border-0">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={bgg}
              alt="First slide"
              height="550px"
            />
            <div
              className="card-img-overlay d-flex flex-column justify-content-center "
              style={{ textAlign: "justify" }}
            >
              <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  NEW SEASON ARRIVALS
                </h5>
                <p className="card-text lead fs-2 ">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={bg2}
              alt="Second slide"
              height="550px"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bg3}
              alt="Third slide"
              height="550px"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Products />
    </div>
  );

  // return (
  //   <div className="hero">
  //     <div className="card bg-dark text-white border-0">
  //       <img
  //         src={bgg}
  //         className="card-img"
  //         alt="Background"
  //         height="550px"
  //         //   alt=""
  //       />
  //       <div
  //         className="card-img-overlay d-flex flex-column justify-content-center "
  //         style={{ textAlign: "justify" }}
  //       >
  //         <div className="container">
  //           <h5 className="card-title display-3 fw-bolder mb-0">
  //             NEW SEASON ARRIVALS
  //           </h5>
  //           <p className="card-text lead fs-2 ">CHECK OUT ALL THE TRENDS</p>
  //         </div>
  //       </div>
  //     </div>
  //     <Products />
  //   </div>
  // );
}

export default Home;
