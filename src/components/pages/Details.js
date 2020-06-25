import React from 'react';
import img from '../../images/11.jpg';

const Details = () => {
  return (
    <div id="details">
      <div
        style={{
          backgroundColor: 'rgb(228, 226, 226)',
          textAlign: 'center',
          padding: '60px',
        }}
      >
        <h1>We listed to Users</h1>
        <p>
          We have conductedextensive reasearch into what people really want from
          a
          <p>
            survey tool. Here's bus just a few of the fundamentals needs we
            caputred.
          </p>
        </p>
        <div className="row" style={{ padding: '20px' }}>
          <div className="col-md-4">
            <h4 style={{ color: 'rgb(92, 6, 163)' }}>Purposeful component</h4>
          </div>
          <div className="col-md-4">
            <h4 style={{ opacity: '0.5' }}>Campaign Management</h4>
          </div>
          <div className="col-md-4">
            <h4 style={{ opacity: '0.5' }}>Instant Feedback</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img src={img} className="center" alt="img" />
          </div>
          <div className="col-md-6">
            <h4>
              Pre-build components, saving your<h4>Time</h4>
            </h4>
            <p>
              It's very easy to using YourVote .You just need to configure
              <p>stuff.There's a whole library of components to chose forms</p>
            </p>
            <ul>
              <li>
                Net prometer score- all done,just drag it and configure it
                <li>
                  Ratings-ask your customers how good you are .They'll tell you
                  <li>
                    Styling -Design the form your way,with the features you want
                  </li>
                </li>
              </li>
            </ul>
            <button className="btn btn-danger" style={{ borderRadius: '20px' }}>
              TRY IT FOR FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
