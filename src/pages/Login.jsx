import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";
import "../css/Login.css";
import { auth } from "../FireBaseApp";
function Login() {
  let history = useHistory();
  let emailRef = useRef();
  let passwordRef = useRef();
  let [sign, setSign] = useState(false);
  let handleForm = (e) => {
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    e.preventDefault();
    if (sign) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((data) => history.push("/"))
        .catch((error) => alert(error.message));
      email = "";
      password = "";
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((data) => history.push("/"))
        .catch((error) => alert(error.message));
    }
  };
  let handleChanging = () => {
    setSign(true);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="login-logo"
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>{!sign ? "Sign-in" : "Sign-up"}</h1>
        <form onSubmit={handleForm}>
          <h5>E-mail</h5>
          <input type="text" ref={emailRef} />

          <h5>Password</h5>
          <input
            type="password"
            ref={passwordRef}
            placeholder="At least 6 characters"
          />

          {!sign ? (
            <button type="submit" className="login__signInButton">
              Sign-in
            </button>
          ) : (
            <button type="submit" className="login__signInButton">
              Sign-up
            </button>
          )}
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {sign ? null : (
          <button className="login__registerButton" onClick={handleChanging}>
            Create your Amazon Account
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
