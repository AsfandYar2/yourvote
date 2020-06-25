import React from 'react';
import { connect } from 'react-redux';
import Draftsurveys from './DraftSurveys';

const Dashboard = ({ forms }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#5744ed',
          color: 'white',
          height: '20vh',
        }}
      >
        <div
          className="container"
          style={{ textAlign: 'center', color: 'white', paddingTop: '35px' }}
        >
          <h1>Dashboard</h1>
        </div>
      </div>
      <div
        className="container"
        style={{
          width: '80%',
          margin: 'auto',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
      >
        <h1 style={{ margin: '20px' }}> Draft Surveys</h1>

        <Draftsurveys forms={forms} />

        <h1 style={{ margin: '20px' }}> Live Surveys</h1>
      </div>
      <div
        style={{
          backgroundColor: '#5744ed',
          color: 'white',
          // height: '100vh',
        }}
      >
        <div className="my-footer wave">
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

const mapStateToProps = (state) => ({
  forms: state.formbuilder.forms,
});

export default connect(mapStateToProps)(Dashboard);
