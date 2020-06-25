import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  });
  const { firstname, lastname, email, password, password2 } = user;
  const onchange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();

    if (firstname === '' || email === '' || password === '') {
      console.alert('Please Enter All Fields', 'danger');
    } else if (password !== password2) {
      console.alert('Password not match', 'danger');
    } else {
      console.log('register', user);
      setUser({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
      });
    }
  };
  return (
    <div
      style={{
        backgroundColor: '#5744ed',
        color: 'white',
        height: '130vh',
      }}
    >
      <div
        className="container"
        style={{ textAlign: 'center', color: 'white' }}
      >
        <h1>Signup</h1>
        <p>
          Fill out the form below to sign up for YourVote.
          <p>
            Already have an account ? Then Please{' '}
            <Link to="login">Sign in</Link>
          </p>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className="card bg-light" style={{ padding: '40px 25px' }}>
          <form onSubmit={onSubmit}>
            <label htmlFor="firstname">FirstName:</label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={onchange}
              required
            ></input>
            <label htmlFor="lastname">LastName:</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={onchange}
              required
            ></input>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onchange}
              required
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onchange}
              required
            ></input>
            <label htmlFor="password2">Password (Again)</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onchange}
              required
            ></input>
            <div style={{ margin: '5px' }}>
              <button
                className="btn btn-sm btn-danger"
                style={{ borderRadius: '20px' }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <Link to="login">
            <button
              className="btn btn-block"
              style={{
                backgroundColor: '#5744ed',
                color: 'white',
                margin: '5px',
                borderRadius: '20px',
              }}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
