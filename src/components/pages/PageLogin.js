import React from "react";
import Login from "../utils/Login";
import image from "./img/log.svg";
import { Link } from "react-router-dom";

const PageLogin = () => {
  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <Login />
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              <Link to="/register">Sign up</Link>
            </button>
          </div>
          <img src={image} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
