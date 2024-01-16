import "./Register.css";
import {useNavigate, Link  } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const RegisterAccount = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/post/register", {firstName: e.target.firstname.value, lastName: e.target.lastname.value, email: e.target.email.value, password: e.target.password.value})
      .then(() => {
        navigate("/login");
        return
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main>
      <div className="triangleLeft"></div>
      <div className="triangleRight"></div>
      <div className="register">
        <h2 className="title">Register</h2>
        <form className="form-register" onSubmit={RegisterAccount}>
          <input type="text" name="lastname" placeholder="Nom" />
          <input type="text" name="firstname" placeholder="Prénom" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />

          <button className="btn-submit" type="submit">Envoyer</button>

          <Link className="btn-submit" to="/login">Se connecter</Link>
        </form>
      </div>
    </main>
  );
};

export default Register;
