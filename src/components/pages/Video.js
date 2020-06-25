import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/11.jpg';

const Video = () => {
  return (
    <div id="video">
      <div className="row container" style={{ padding: '40px' }}>
        <div className="col-md-6" style={{ textAlign: 'center' }}>
          <h4>
            Now Is The Time To Upgrade<h4>Yourr Marketing Solution</h4>
          </h4>
          <p>
            Target The Right customers for your business with the help
            <p>
              patented segmentaion technology and{' '}
              <p>
                Deploy efficient marketing compaigns.Keep your customers
                <p>Happy and loyal</p>
              </p>
            </p>
          </p>
          <ul>
            <li>
              Understand customers and meet their requiremnets
              <li>Targeted Client base with YourVote efficient Technology</li>
            </li>
          </ul>
          <Link to="signup">
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
              Sign Up
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={img} className="center" alt="img" />
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'rgb(228, 226, 226)',
          textAlign: 'center',
          padding: '60px',
        }}
      >
        <h1>Video</h1>
        <p>
          What better way to show off YourVote marketing automation saas app
          than
          <p>
            presenting you some greate situations of each module and tool
            available to users<p>in a video</p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Video;
