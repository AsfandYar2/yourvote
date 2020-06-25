import React from "react";
import { Link } from "react-router-dom";
import menu from "../../images/menu.svg";

const SignInLinks = () => {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "#5744ed",
        color: "white",
        margin: "0px",
      }}
    >
      <h2>YourVote</h2>

      <div class="dropdown my-dropdown dropleft">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ backgroundColor: "#5744ed", border: "0px" }}
        >
          <img src={menu} alt="menu" height="24" style={{ width: "24px" }} />
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          style={{ width: "250px" }}
        >
          <div className="dropdown-menu-items">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/build">Build</Link>
            <Link to="/changepassword">Change Password</Link>
            <Link>Manage Emails</Link>
            <button
              style={{
                color: "white",
                backgroundColor: "#5744ed",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              <Link to="/">Logout</Link>
            </button>
          </div>
        </div>
      </div>

      <ul className="desktop">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/build">Create A Survey</Link>
        </li>

        <li class="dropdown dropleft">
          <span
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              backgroundColor: "#5744ed",
              border: "0px",
              padding: "0px 4px",
              color: "white",
            }}
          >
            Account
          </span>
          <div
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{ width: "250px" }}
          >
            <div className="dropdown-menu-items">
              <Link to="/changepassword">Change Password</Link>
              <Link to="/managemails">Manage Emails</Link>
            </div>
          </div>
        </li>

        <li>
          <button
            style={{
              color: "white",
              backgroundColor: "#5744ed",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            <Link to="/">Logout</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SignInLinks;
