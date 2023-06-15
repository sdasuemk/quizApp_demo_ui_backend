import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const handleChange = (e) => {
    setLoginData((v) => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(loginData);

    if (loginData.userType === 'admin' && response.data.userType === 'admin') {
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      navigate(`/adminDashboard`);
    }
    if (loginData.userType === 'user' && response.data.userType === 'user') {
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      navigate(`/assignment`);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="admin"
              name="userType"
              checked={loginData.userType === 'admin'}
              onChange={handleChange}
            />
            Admin
          </label>

          <label>
            <input
              type="radio"
              value="user"
              name="userType"
              checked={loginData.userType === 'user'}
              onChange={handleChange}
            />
            User
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
