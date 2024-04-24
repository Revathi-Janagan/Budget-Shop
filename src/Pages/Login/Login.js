import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginFormData, setLoginFormData] = useState({
    loginUserName: "",
    loginPassword: "",
  });
  const [signupFormData, setSignupFormData] = useState({
    signupUserName: "",
    signupPassword: "",
    signupMobileNo: "",
    signupEmail: "",
  });
  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleInputChangeSignup = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", setLoginFormData);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Details:", setSignupFormData);
  };

  return (
    <div className="login">
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked={activeTab === "login"}
                onChange={() => setActiveTab("login")}
              />
              <label htmlFor="tab-1" className="tab">
                Login
              </label>

              <input
                id="tab-2"
                type="radio"
                name="tab"
                className="sign-up"
                checked={activeTab === "signup"}
                onChange={() => setActiveTab("signup")}
              />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>

              <div className="login-space">
                {activeTab === "login" && (
                  <form onSubmit={handleLoginSubmit} className="login">
                    <div className="group">
                      <label htmlFor="login-user" className="label">
                        Username
                      </label>
                      <input
                        id="login-user"
                        type="text"
                        className="input"
                        placeholder="Enter your username"
                        value={loginFormData.loginUserName}
                        onChange={handleInputChangeLogin}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="login-pass" className="label">
                        Password
                      </label>
                      <input
                        id="login-pass"
                        type="password"
                        className="input"
                        placeholder="Enter your password"
                        value={loginFormData.loginPassword}
                        onChange={handleInputChangeLogin}
                      />
                    </div>
                    <div className="group">
                      <input
                        id="login-check"
                        type="checkbox"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="login-check">
                        <span className="icon"></span> Keep me Signed in
                      </label>
                    </div>
                    <div className="group">
                      <button type="submit" className="button">
                        Sign In
                      </button>
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </form>
                )}

                {activeTab === "signup" && (
                  <form onSubmit={handleSignupSubmit} className="sign-up-form">
                    <div className="group">
                      <label htmlFor="signup-user" className="label">
                        Username
                      </label>
                      <input
                        id="signup-user"
                        type="text"
                        className="input"
                        placeholder="Create your Username"
                        value={signupFormData.signupUserName}
                        onChange={handleInputChangeSignup}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="signup-pass" className="label">
                        Password
                      </label>
                      <input
                        id="signup-pass"
                        type="password"
                        className="input"
                        placeholder="Create your password"
                        value={signupFormData.signupPassword}
                        onChange={handleInputChangeSignup}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="signup-repeat-pass" className="label">
                        Mobile Number
                      </label>
                      <input
                        id="signup-repeat-pass"
                        type="text"
                        className="input"
                        placeholder="Enter your Mobile Number"
                        value={signupFormData.signupMobileNo}
                        onChange={handleInputChangeSignup}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="signup-email" className="label">
                        Email Address
                      </label>
                      <input
                        id="signup-email"
                        type="text"
                        className="input"
                        placeholder="Enter your email address"
                        value={signupFormData.signupEmail}
                        onChange={handleInputChangeSignup}
                      />
                    </div>
                    <div className="group">
                      <button type="submit" className="button">
                        Sign Up
                      </button>
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
