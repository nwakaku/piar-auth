import React from "react";
import { useHistory } from "react-router-dom";
import "./view.css";

const StationView = ({ viewUser }) => {
  let history = useHistory();
  return (
    <div>
      {" "}
      <div class="container_view">
        <div class="cover-photo">
          <img
            src="https://source.unsplash.com/random/300×300/?car"
            class="profile"
          />
        </div>
        <p class="about">ID: {viewUser.id}</p>
        <p class="about">Station: {viewUser.name}</p>
        <p class="about">Comment: {viewUser.comment}</p>
        <button
          class="msg-btn"
          onClick={() => {
            history.push("/adminservice");
          }}
        >
          Love
        </button>
        <button
          class="follow-btn"
          onClick={() => {
            history.push("/adminservice");
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

export default StationView;
