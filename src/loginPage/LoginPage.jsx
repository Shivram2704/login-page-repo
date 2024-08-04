import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '') {
      setError('Username is required');
    } else if (password === '') {
      setError('Password is required');
    } else {
      setError('');
      // Handle successful login
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <header className="App-header">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </label>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default LoginPage;
