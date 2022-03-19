import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>You have registered successfully</p>
      <Link to="/login">login to access adminboard</Link>
    </div>
  );
};

export default Dashboard;
