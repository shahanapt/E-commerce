import React from "react";
import { Link, NavLink } from "react-router-dom";
import common from "../components/common.jpg";

function Product() {
  // const cardItem = (item) => {
  //   return (

  //   );
  // };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          <div class="card my-5 py-4" style={{ width: "18rem" }}>
            <img class="card-img-top" src={common} />
            <div class="card-body text-center">
              <h5 class="card-title">Jacket</h5>
              <p className="lead">$200</p>
              <Link to="/products">
                <a href="#" class="btn btn-outline-primary me-2">
                  Buy Now
                </a>
              </Link>
              <Link to="/products">
                <a href="#" class="btn btn-outline-primary">
                  Add to cart
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
