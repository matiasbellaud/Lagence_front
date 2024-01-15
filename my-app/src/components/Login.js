import "./Login.css";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  // function ApiGet() {
  //     fetch('http://127.0.0.1:8000/api/films')
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));
  // }
  return (
    <main>
      <div className="triangleLeft"></div>
      <div className="triangleRight"></div>
      <div className="login">
        <h2 className="title">Login</h2>
        <form className="form-login">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />
          <Link to="/explorer">
            <button className="btn-submit" type="submit" /*onClick={formData}*/>
              Envoyer
            </button>
          </Link>
          <Link className="btn-submit" to="/register">
            Créer un compte
          </Link>
        </form>
      </div>
      <Outlet />
    </main>
  );
};

export default Login;
