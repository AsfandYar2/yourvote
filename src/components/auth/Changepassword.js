import React, { useState } from 'react';

const Changepassword = () => {
  const [password, setPassword] = useState({
    current: '',
    newpassword: '',
    newpassword2: '',
  });
  const { current, newpassword, newpassword2 } = password;
  const onchange = (e) =>
    setPassword({ ...password, [e.target.name]: e.target.value });
  return (
    <div
      style={{
        backgroundColor: '#5744ed',
        color: 'white',
        height: '100vh',
      }}
    >
      <div
        className="container"
        style={{ textAlign: 'center', color: 'white' }}
      >
        <h1>Change Password</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <div className="card bg-light" style={{ padding: '40px 25px' }}>
          <form onSubmit="">
            <label htmlFor="current">Current:</label>
            <input
              type="password"
              name="current"
              value={current}
              onChange={onchange}
              required
            ></input>
            <label htmlFor="newpassword">New Password:</label>
            <input
              type="password"
              name="newpassword"
              value={newpassword}
              onChange={onchange}
              required
            ></input>
            <label htmlFor="newpassword2">New Password (Again):</label>
            <input
              type="password"
              name="newpassword2"
              value={newpassword2}
              onChange={onchange}
              required
            ></input>

            <div style={{ margin: '5px' }}>
              <button
                className="btn btn-block btn-danger"
                style={{
                  color: 'white',
                  margin: '5px',
                  borderRadius: '20px',
                }}
              >
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
