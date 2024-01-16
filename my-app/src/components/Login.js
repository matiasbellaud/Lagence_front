import "./Login.css";
import {useNavigate, Link  } from "react-router-dom";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["idUser"]);

  const LoginAccount = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/post/login", {email: e.target.email.value, password: e.target.password.value})
      .then((res) => {
        console.log(res.data)
        if (res.data != -1){
          setCookie("idUser", res.data, { path: "/" });
          navigate("/");
          return
        }
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main>
      <div className="triangleLeft"></div>
      <div className="triangleRight"></div>
      <div className="login">
        <h2 className="title">Login</h2>
        <form className="form-login" onSubmit={LoginAccount}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />

          <button className="btn-submit" type="submit">Envoyer</button>

          <Link className="btn-submit" to="/register">Créer un compte</Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
