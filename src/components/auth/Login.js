import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onchange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      console.log('Please Enter All Fields', 'danger');
    } else {
      console.log('register', user);
      setUser({
        email: '',
        password: '',
      });

      //there you will call auth api, but for testing I am just going to dashboard wihout auth
      history.push('/dashboard');
    }
  };
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
        <h1>Sign In</h1>
        <p>Fill out the form below to sign In for YourVote.</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <div className="card bg-light" style={{ padding: '40px 20px' }}>
          <form onSubmit={onSubmit}>
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

            <div style={{ margin: '5px' }}>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
