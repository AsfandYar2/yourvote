import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
import Pricing from './Pricing';
import Details from './Details';
import Video from './Video';
import a from '../../images/player.svg';

const Home = () => {
  return (
    <div>
      {/* Landing */}
      <div className="landing">
        <div className="landing-inner" id="home">
          <div className="row">
            <div className="col-md-6 text-center">
              <h1>
                Bringing<h1>surveys to life</h1>
              </h1>

              <p className="lead">
                First the first time, powerful and features rich surveys
              </p>
              <p className="lead">real-time results</p>
              <hr />

              <Link to="/signup">
                <button
                  className="btn btn-lg btn-light"
                  style={{
                    borderRadius: '20px',
                    color: '#5744ed',
                    backgroundColor: 'white',
                    position: 'relative',
                    zIndex: '99',
                  }}
                >
                  SIGN UP
                </button>
              </Link>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={a}
                alt="img1"
                height="270px"
                style={{ transform: 'rotate(3deg)' }}
                className="center"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Details />
      <Video />
      <Pricing />

      {/* footer */}

      <div
        style={{
          backgroundColor: '#5744ed',
          color: 'white',
        }}
      >
        <div className="my-footer">
          <div>
            <h2>About YourVote</h2>
            <p>
              we're passionate about offering some of{' '}
              <p>
                the best business growth services for start <p>more words</p>
              </p>
            </p>
          </div>
          <div>
            <h2>Important Links </h2>
            <ul>
              <li>
                <a href="#!" style={{ color: 'white' }}>
                  Our business partners startupguide.com
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: 'white' }}>
                  Read our Terms & Conditions Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>22 Innovative, San Fracisco,CA 94043,US</li>
              <li>hello@yourvote.io</li>
              <li>www.yourvote.io</li>
            </ul>
          </div>
        </div>
        <hr />
        <p style={{ textAlign: 'center' }}>Copyright 2020 YourVote</p>
      </div>
    </div>
  );
};

export default Home;
