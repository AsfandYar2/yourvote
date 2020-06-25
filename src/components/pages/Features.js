import React from 'react';
import img from '../../images/analytics.svg';
import img1 from '../../images/integration.svg';
import img2 from '../../images/form.svg';
const Features = () => {
  return (
    <div id="features">
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'rgb(92, 6, 163)', paddingTop: '30px' }}>
          <strong>DESCRIPTION</strong>
        </p>
        <h2>Surveys that people will really take</h2>
        <h2> part in and that give you the</h2>
        <h2>Visibility you need</h2>
      </div>
      <div className="row" style={{ textAlign: 'center', padding: '30px' }}>
        <div className="col-md-4" style={{ paddingBottom: '8px' }}>
          <img
            id="img"
            src={img2}
            alt="img1"
            style={{ width: '50%', height: '50%' }}
          />
          <h2>Form Builder</h2>
          <p>
            A Simple drag-and-drop tools,packed
            <p>
              with features allowing you to create<p>survey forms in minutes</p>
            </p>
          </p>
        </div>
        <div className="col-md-4" style={{ paddingBottom: '8px' }}>
          <img
            src={img}
            className="center"
            alt="img2"
            style={{ width: '50%', height: '50%' }}
          />
          <h2>Instant Analytics</h2>
          <p>
            YourVote tells you what's happening
            <p>
              real-time so you can measure<p>instant effectiveness</p>
            </p>
          </p>
        </div>
        <div className="col-md-4" style={{ paddingBottom: '8px' }}>
          <img
            src={img1}
            className="center"
            alt="img"
            style={{ width: '50%', height: '50%' }}
          />
          <h2>Integration tools</h2>
          <p>
            an fully equiped API so you can
            <p>
              integrate the data into your own<p>application and dashboard</p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
