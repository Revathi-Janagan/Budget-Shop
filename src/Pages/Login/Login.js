import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  // State to manage the active tab and form inputs
  const [activeTab, setActiveTab] = useState('login');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRepeatPassword, setSignupRepeatPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log("Login username:", loginUsername);
    console.log("Login password:", loginPassword);
  };

  // Function to handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Your signup logic here
    console.log("Signup username:", signupUsername);
    console.log("Signup password:", signupPassword);
    console.log("Signup repeat password:", signupRepeatPassword);
    console.log("Signup email:", signupEmail);
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked={activeTab === 'login'}
                onChange={() => setActiveTab('login')}
              />
              <label htmlFor="tab-1" className="tab">Login</label>

              <input
                id="tab-2"
                type="radio"
                name="tab"
                className="sign-up"
                checked={activeTab === 'signup'}
                onChange={() => setActiveTab('signup')}
              />
              <label htmlFor="tab-2" className="tab">Sign Up</label>

              <div className="login-space">
                {activeTab === 'login' && (
                  <form onSubmit={handleLoginSubmit} className="login">
                    <div className="group">
                      <label htmlFor="login-user" className="label">Username</label>
                      <input id="login-user" type="text" className="input" placeholder="Enter your username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
                    </div>
                    <div className="group">
                      <label htmlFor="login-pass" className="label">Password</label>
                      <input id="login-pass" type="password" className="input" placeholder="Enter your password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                    <div className="group">
                      <input id="login-check" type="checkbox" className="check" defaultChecked />
                      <label htmlFor="login-check"><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="group">
                      <button type="submit" className="button">Sign In</button>
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </form>
                )}

                {activeTab === 'signup' && (
                  <form onSubmit={handleSignupSubmit} className="sign-up-form">
                    <div className="group">
                      <label htmlFor="signup-user" className="label">Username</label>
                      <input id="signup-user" type="text" className="input" placeholder="Create your Username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
                    </div>
                    <div className="group">
                      <label htmlFor="signup-pass" className="label">Password</label>
                      <input id="signup-pass" type="password" className="input" placeholder="Create your password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
                    </div>
                    <div className="group">
                      <label htmlFor="signup-repeat-pass" className="label">Mobile Number</label>
                      <input id="signup-repeat-pass" type="text" className="input" placeholder="Enter your Mobile Number" value={signupRepeatPassword} onChange={(e) => setSignupRepeatPassword(e.target.value)} />
                    </div>
                    <div className="group">
                      <label htmlFor="signup-email" className="label">Email Address</label>
                      <input id="signup-email" type="text" className="input" placeholder="Enter your email address" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                    </div>
                    <div className="group">
                      <button type="submit" className="button">Sign Up</button>
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      <label htmlFor="tab-1">Already Member?</label>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
