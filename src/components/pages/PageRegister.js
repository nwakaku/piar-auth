import React from "react";
import Register from "../utils/Register";
import image from "./img/register.svg";
import { Link } from "react-router-dom";

const PageRegister = () => {
  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <Register />
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>One of Us ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              <Link to="/">Sign in</Link>
            </button>
          </div>
          <img src={image} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageRegister;
