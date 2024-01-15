import "./Login.css";

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
          <button className="btn-submit" type="submit" /*onClick={formData}*/>
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
