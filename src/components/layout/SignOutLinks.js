import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import menu from '../../images/menu.svg';

const SignOutLinks = () => {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: '#5744ed',
        color: 'white',
        margin: '0px',
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
          style={{ backgroundColor: '#5744ed', border: '0px' }}
        >
          <img src={menu} alt="menu" height="24" style={{ width: '24px' }} />
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-menu-items">
            <Link to="/#home">HOME</Link>

            <Link to="/#features">FEATURES</Link>

            <Link to="/#details">DETAILS</Link>

            <Link to="/#video">VIDEO</Link>

            <Link to="/#pricing">PRICING</Link>
            <button
              style={{
                color: 'white',
                backgroundColor: '#5744ed',
                border: '1px solid white',
                borderRadius: '20px',
              }}
            >
              <Link to="/login">LOGIN</Link>
            </button>
          </div>
        </div>
      </div>

      <ul className="desktop">
        <li>
          <Link to="/#home">HOME</Link>
        </li>
        <li>
          <Link to="/#features">FEATURES</Link>
        </li>
        <li>
          <Link to="/#details">DETAILS</Link>
        </li>
        <li>
          <Link to="/#video">VIDEO</Link>
        </li>
        <li>
          <Link to="/#pricing">PRICING</Link>
        </li>
        <li>
          <button
            style={{
              color: 'white',
              backgroundColor: '#5744ed',
              border: '1px solid white',
              borderRadius: '20px',
            }}
          >
            <Link to="/login">LOGIN</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SignOutLinks;
