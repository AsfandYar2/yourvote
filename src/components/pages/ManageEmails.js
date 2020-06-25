import React, { useState } from "react";

const ManageEmails = () => {
  const [emails, setEmail] = useState([]);
  const [user, setUser] = useState({
    email: "",
  });

  const { email } = user;
  const onchange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user is ", user);
    setEmail([...emails, user.email]);
    setUser({ email: "" });
  };
  return (
    <div style={{ backgroundColor: "#5744ed", height: "100vh" }}>
      <div style={{ textAlign: "center", color: "White" }}>
        <h1>
          <strong>E-mail Address</strong>
        </h1>
        <h5>
          <strong>
            The following E-mail addresses are associated with your account
          </strong>
        </h5>
      </div>
      <div>
        {emails &&
          emails.map((email) => {
            return (
              <div className="container">
                <h6>{email}</h6>
                <button>Make Primary</button>
                <button>Re-send Verification</button>
                <button>Remove</button>
                <hr />
              </div>
            );
          })}
      </div>
      <div className="container">
        <h4>
          <strong>Add E-mail Address</strong>
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          //   height: "70vh",
        }}
      >
        <form onSubmit={onSubmit}>
          <label htmlFor="email">
            <strong>E-mail:</strong>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onchange}
            required
          ></input>
          <div style={{ margin: "5px" }}>
            <button>Add E-mail</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageEmails;
