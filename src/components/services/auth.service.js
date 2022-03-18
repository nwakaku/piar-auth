import axios from "axios";
const API_URL = "https://piar.meew.me/users";
const SERVICE_URL = "https://piar.meew.me/stations";

class AuthService {
  login = (login, password) => {
    return axios
      .post(API_URL + "/auth", {
        login,
        password,
      })
      .then((response) => {
        if (response.data.user_jwt) {
          localStorage.setItem("user", response.data.user_jwt);
        }
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
  logout() {
    localStorage.removeItem("user");
  }
  register = (name, comment, login, password) => {
    return axios.post(API_URL, {
      name,
      comment,
      login,
      password,
    });
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  //stations
}
export default new AuthService();
