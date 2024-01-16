import "./Nav.css";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Nav() {

  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["idUser"]);

  const deconnection = () => {
    document.cookie = "idUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate('/login');
    return
  };

  return (
    <div className="Nav">
      <h2 className="title-nav">L'AGENCE</h2>
      <input
        className="btn-nav"
        type="text"
        name="Nom"
        placeholder="Recherche"
      />
      <Link className="btn-nav" to="/configuration">
        Créer
      </Link>
      <button onClick={deconnection} className="btn-nav" >
        Déconnexion
      </button>
      <Outlet />
    </div>
  );
}

export default Nav;
