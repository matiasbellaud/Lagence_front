import "./Register.css";

const Register = () => {
  function formData() {
    const data = new FormData();
    data.append("Nom", "Nom");
    data.append("Prenom", "Prenom");
    data.append("email", "email");
    data.append("password", "password");
    return data;
  }
  return (
    <main>
      <div className="triangleLeft"></div>
      <div className="triangleRight"></div>
      <div className="register">
        <h2 className="title">Register</h2>
        <form className="form-register">
          <input type="text" name="Nom" placeholder="Nom" />
          <input type="text" name="Prenom" placeholder="Prénom" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Mot de passe" />
          <button className="btn-submit" type="submit" onClick={formData}>
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
