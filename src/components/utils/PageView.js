import React from "react";
import { useHistory } from "react-router-dom";
import "./view.css";

const PageView = ({ viewUser }) => {
  let history = useHistory();
  return (
    <div>
      {" "}
      <div class="container_view">
        <div class="cover-photo">
          <img
            src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            class="profile"
          />
        </div>
        <div class="profile-name">Name: {viewUser.name}</div>
        <p class="about">ID: {viewUser.id}</p>
        <p class="about">Login: {viewUser.login}</p>
        <p class="about">Comment: {viewUser.comment}</p>
        <button
          class="msg-btn"
          onClick={() => {
            history.push("/Pageadmin");
          }}
        >
          Love
        </button>
        <button
          class="follow-btn"
          onClick={() => {
            history.push("/Pageadmin");
          }}
        >
          Back
        </button>
        <div>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default PageView;
