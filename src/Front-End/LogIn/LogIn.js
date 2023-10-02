import React, { useState } from "react";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  // navigate('/home');

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      // .then(auth=>console.log(auth))
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h5>Signin</h5>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit" className="login__signinBtn" onClick={signIn}>
            Signin
          </button>
        </form>
        <p>
          {" "}
          By sign-in you agree to the amanzon fake clone conditions of use
          sale.please see your privacy Notice cookies Notice and interest-based
          Ads
        </p>
        <button className="login__registrerbtn" onClick={register}>
          create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIn;
