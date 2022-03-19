import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://piar.meew.me/";

const headers = authHeader();
console.log(headers);
class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }
  getUserBoard() {
    return axios.get(API_URL + "users", { headers });
  }
  getModeratorBoard() {
    return axios.get(API_URL, { headers });
  }
  getAdminBoard() {
    return axios.get(API_URL, { headers });
  }
  // separate file

  async updateUser(userId, { name, comment, login, password }) {
    console.log(userId, name, comment, login, password);
    const response = await axios.patch(
      API_URL + "users/" + userId,
      { name, comment, login, password },
      { headers }
    );
    console.log(response);
    return response;
  }

  async getUserById(userId) {
    console.log(userId);
    return await axios.get(API_URL + "users/" + userId, { headers });
  }

  async deleteUser(userId) {
    console.log(userId);
    const result = await axios.delete(API_URL + "users/" + userId, { headers });
    console.log(result);
    return result.data;
  }

  //stations
  getStationsBoard() {
    return axios.get(API_URL + "stations", { headers });
  }

  serviceregister = (name, comment) => {
    return axios.post(
      API_URL + "stations",

      {
        name,
        comment,
      },
      { headers }
    );
  };

  async updateStation(userId, { name, comment }) {
    console.log(userId, name, comment);
    const response = await axios.patch(
      API_URL + "stations/" + userId,
      { name, comment },
      { headers }
    );
    console.log(response);
    return response;
  }

  async getStationById(userId) {
    console.log(userId);
    return await axios.get(API_URL + "stations/" + userId, { headers });
  }

  async deleteStation(userId) {
    console.log(userId);
    const result = await axios.delete(API_URL + "stations/" + userId, {
      headers,
    });
    console.log(result);
    return result.data;
  }
}

export default new UserService();
