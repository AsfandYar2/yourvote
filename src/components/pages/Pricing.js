import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="pricing-grid">
        <div
          className="card bg-light"
          // style={{ padding: '60px', margin: '40px', textAlign: 'center' }}
        >
          <h6 style={{ color: 'rgb(92, 6, 163)' }}>
            <strong>BASIC</strong>
          </h6>
          <p>
            <h1>$Free</h1>
            Unlimited
            <hr />
          </p>

          <ul>
            <li>
              Email Marketing Module
              <li>
                User Control Management
                <li>
                  List Building and Cleaning
                  <li>
                    Collected Data Reports<li>Planning and Evalutions</li>
                  </li>
                </li>
              </li>
            </li>
          </ul>
          <Link to="signup">
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
              Sign Up
            </button>
          </Link>
        </div>
        <div
          className="card bg-light"
          // style={{ padding: '60px', margin: '40px', textAlign: 'center' }}
        >
          <h6 style={{ color: 'rgb(92, 6, 163)' }}>
            <strong>PROFESSIONAL</strong>
          </h6>
          <p>
            <h1>$29.99</h1>
            monthly
            <hr />
          </p>

          <ul>
            <li>
              Email Marketing Module
              <li>
                User Control Management
                <li>
                  List Building and Cleaning
                  <li>
                    Collected Data Reports<li>Planning and Evalutions</li>
                  </li>
                </li>
              </li>
            </li>
          </ul>
          <Link to="signup">
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
              Sign Up
            </button>
          </Link>
        </div>
        <div
          className="card bg-light"
          // style={{ padding: '60px', margin: '40px', textAlign: 'center' }}
        >
          <h6 style={{ color: 'rgb(92, 6, 163)' }}>
            <strong>CORPORATE</strong>
          </h6>
          <p>
            <h1>$79.99</h1>
            monthly
            <hr />
          </p>

          <ul>
            <li>
              Email Marketing Module
              <li>
                User Control Management
                <li>
                  List Building and Cleaning
                  <li>
                    Collected Data Reports<li>Planning and Evalutions</li>
                  </li>
                </li>
              </li>
            </li>
          </ul>
          <Link to="signup">
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
