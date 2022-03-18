import React, { useEffect, useState } from "react";
import "./admin.css";
import UserService from "../services/user.service";
import { Link } from "react-router-dom";

const AdminUtils = () => {
  const [users, setUsers] = useState([]);
  const [userdeleted, setUserdeleted] = useState([]);

  const deletedUser = async (id) => { 
    const response = await UserService.deleteUser(id)
    console.log(response);
    setUserdeleted(response);
    // window.location.reload(false)
  }

  const updateUser = async (id) => {
    const response = await UserService.updateUser(id);
    
    console.log(response)
  }


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
    <>
      <div class="sidebar">
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus"></i>
          <span class="logo_name">CodingLab</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#" class="active">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">List Users</span>
            </a>
          </li>
          <li>
            <Link to="/admincreate">
              <a>
                <i class="bx bx-box"></i>
                <span class="links_name">Create New User</span>
              </a>
            </Link>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-list-ul"></i>
              <span class="links_name">Edit Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Delete Users</span>
            </a>
          </li>
          <li>
            <Link to="/adminservice">
              <a>
                <i class="bx bx-coin-stack"></i>
                <span class="links_name">Stations</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/create_service">
              <a>
                <i class="bx bx-book-alt"></i>
                <span class="links_name">Create New Station</span>
              </a>
            </Link>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-user"></i>
              <span class="links_name">Edit Station</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-message"></i>
              <span class="links_name">Delete Station</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="links_name">Setting</span>
            </a>
          </li>
          <li class="log_out">
            <a href="#">
              <i class="bx bx-log-out"></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class="bx bx-search"></i>
          </div>
          <div class="profile-details">
            <img src="images/profile.jpg" alt="" />
            <span class="admin_name">Users</span>
            <i class="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Stations</div>
                <div class="number">40,876</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Sales</div>
                <div class="number">38,876</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Profit</div>
                <div class="number">$12,876</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-cart cart three"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Return</div>
                <div class="number">11,086</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
              <i class="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div class="sales-boxes">
            <div className="table-container"> 
            <p>{userdeleted.name}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Comment</th>
                    <th>Update</th>
                    <th>Delete</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
                    <tr>
                      <td data-aria-label="ID">{item.id} </td>
                      <td data-aria-label="Name">{item.name}</td>
                      <td data-aria-label="Comment">{item.comment}</td>
                      <td data-aria-label="Update">
                        <button
                          // href="https://web.facebook.com/pst.ndukwendukwe"
                          className="btny"
                          onClick={(e) => updateUser(item.id)}
                        >
                          Update
                        </button>
                      </td>
                      <td data-aria-label="Delete">
                        <span className="text_open">
                          <button
                            // href="https://web.facebook.com/pst.ndukwendukwe"
                            className="btny delete"
                          onClick={(e) => deletedUser(item.id)}>
                            Delete
                          </button>
                        </span>
                      </td>
                      <td data-aria-label="View">
                        <a
                          href="https://web.facebook.com/pst.ndukwendukwe"
                          className="btny"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* jjkv */}
            <div class="top-sales box">
              <div class="title">Top Seling Product</div>
              <ul class="top-sales-details">
                <li>
                  <a href="#">
                    <img src="images/sunglasses.jpg" alt="" />
                    <span class="product">Vuitton Sunglasses</span>
                  </a>
                  <span class="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/jeans.jpg" alt="" />
                    <span class="product">Hourglass Jeans </span>
                  </a>
                  <span class="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/nike.jpg" alt="" />
                    <span class="product">Nike Sport Shoe</span>
                  </a>
                  <span class="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/scarves.jpg" alt="" />
                    <span class="product">Hermes Silk Scarves.</span>
                  </a>
                  <span class="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/blueBag.jpg" alt="" />
                    <span class="product">Succi Ladies Bag</span>
                  </a>
                  <span class="price">$1456</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/addidas.jpg" alt="" />
                    <span class="product">Addidas Running Shoe</span>
                  </a>
                  <span class="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/shirt.jpg" alt="" />
                    <span class="product">Bilack Wear's Shirt</span>
                  </a>
                  <span class="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUtils;
