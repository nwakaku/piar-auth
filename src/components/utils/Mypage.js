import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const Mypage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        console.log(response.data);
        setUsers(response.data);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setUsers(resMessage);
        alert(users);
      }
    );
  }, []);

  return (
    <div>
      Mypage
      <div>
        <h2>Doing stuff with data</h2>
        <div>
          <h2>Doing stuff with data</h2>
          {users.map((item) => (
            <span>{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
