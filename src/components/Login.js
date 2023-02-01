import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {setMessage(message) && <p>{setMessage(message)}</p>}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: ({ username, password }) => dispatch(login({ username, password }))
});

export default connect(null, mapDispatchToProps)(Login);
