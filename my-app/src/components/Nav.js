import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <h2 className="title-nav">Logo</h2>
      <input
        className="btn-nav"
        type="text"
        name="Nom"
        placeholder="Recherche"
      />
      <a className="btn-nav" href="/">
        Créer
      </a>
      <a className="btn-nav" href="/">
        Déconnexion
      </a>
    </div>
  );
}

export default Nav;
