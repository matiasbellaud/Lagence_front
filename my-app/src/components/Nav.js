import "./Nav.css";
import { Outlet, Link } from "react-router-dom";

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
      {/* <Link className="btn-nav" to="/create">
        Créer
      </Link> */}
      <a className="btn-nav" href="/">
        Créer
      </a>
      <Link className="btn-nav" to="/">
        Déconnexion
      </Link>
      <Outlet />
    </div>
  );
}

export default Nav;
