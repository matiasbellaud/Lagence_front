import { Link } from "react-router-dom";
import "./Configuration.css";
import {  useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Configuration = () => {

    const [cookies] = useCookies(["idUser"]);
    const navigate = useNavigate();

    useEffect(() => {
      if (cookies.idUser == null) {
        navigate("/login");
        return;
      }
    },[]);

    return (
        <main>
            <div className="triangleLeft"></div>
            <div className="triangleRight"></div>
            <div className="configuration">
                <h2 className="title">Configuration</h2>
                <form className="form-configuration">
                    <input type="text" name="nom" placeholder="nom" />
                    <input type="text" name="sexe" placeholder="sexe" />
                    <input type="text" name="couleurDeCheveux" placeholder="couleur de cheveux" />
                    <input type="text" name="planet" placeholder="planet" />
                    <input type="text" name="ville" placeholder="ville" />
                    <input type="text" name="city2" placeholder="ville 2" />
                    <input type="text" name="équipe" placeholder="équipe" />
                    <input type="text" name="vehicule" placeholder="vehicule" />
                    <Link to="/explorer">
                    <button className="btn-submit" type="submit">
                            Envoyer
                    </button>
                    </Link>
                </form>
            </div>
            <div className="pouvoir">
                <h2 className="title-pouvoir">Pouvoir(s)</h2>
            <form className="form-pouvoir">
                    <input type="text" name="nom" placeholder="" />
                    <input type="text" name="description" placeholder="" />
                    <input type="text" name="image" placeholder="" />
            </form>
            </div>
            <div className="gadget">
                <h2 className="title-gadget">Gadget(s)</h2>
                <form className="form-gadget">
                    <input type="text" name="nom" placeholder="" />
                    <input type="text" name="description" placeholder="" />
                </form>
            </div>
        </main>
    );
}
export default Configuration;