import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login">
      {isSignUp ? (
        <div className="form">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <p onClick={toggleSignUp}>Already have an account? Log In</p>
        </div>
      ) : (
        <div className="form">
          <h2>Log In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
          <p onClick={toggleSignUp}>Don't have an account? Sign Up</p>
        </div>
      )}
    </div>
  );
};

export default Login;
