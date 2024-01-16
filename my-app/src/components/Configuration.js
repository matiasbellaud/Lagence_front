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
                    <input type="text" name="couleur de cheveux" placeholder="couleur de cheveux" />
                    <input type="text" name="planet" placeholder="planet" />
                    <input type="text" name="ville" placeholder="ville" />
                    <input type="text" name="équipe" placeholder="équipe" />
                    <input type="text" name="super pouvoir" placeholder="super pouvoir" />
                    <input type="text" name="vehicule" placeholder="vehicule" />
                    <button className="btn-submit" type="submit" /*onClick={formData}*/>
                            Envoyer
                    </button>
                </form>
            </div>
        </main>
    );
}
export default Configuration;