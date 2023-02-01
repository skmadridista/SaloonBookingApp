import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      try {
        // Send a request to the server to register the user
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const body = JSON.stringify(formData);
        const res = await axios.post('http://127.0.0.1:8000/api/register/', body, config);
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
 
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>

        <input type="submit" value="Register" className="btn btn-secondary" onChange={handleSubmit}/>
      </form>
    </div>
  );
};

export default Register;
