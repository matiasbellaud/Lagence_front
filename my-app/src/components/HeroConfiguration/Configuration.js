import { Link } from "react-router-dom";
import "./Configuration.css";
import {  useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const Configuration = () => {

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["idUser"]);

    useEffect(() => {
      if (cookies.idUser == null) {
        navigate("/login");
        return;
      }
    },[]);

    const createHero = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/post/createHero", {idUser: cookies.idUser, name: e.target.name.value, secretIdentity: e.target.secretName.value, gender: e.target.gender.value, hairColor: e.target.hairColor.value, description: e.target.description.value, planet: e.target.planet.value, vehicle: e.target.vehicle.value, cities: [e.target.city.value, e.target.city2.value], teams: [e.target.team.value], gadgets: [e.target.gadget1.value, e.target.gadget2.value], power: [e.target.power1.value, e.target.power2.value,  e.target.power3.value],})
          .then((res) => {
            if (res.data == "success"){
              navigate("/");
              return
            }
            navigate("/configuration");
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return (
        <main>
            <div className="triangleLeft"></div>
            <div className="triangleRight"></div>
            <div className="configuration">
                <Link to="/">
                    <button className="btn-submit">
                          Home
                    </button>
                </Link>
                <h2 className="title">Configuration</h2>
                <form className="form-configuration" name="form1" onSubmit={createHero}>
                    <input type="text" name="name" placeholder="nom" />
                    <input type="text" name="secretName" placeholder="identité secrete" />
                    <input type="text" name="description" placeholder="description" />
                    <input type="text" name="gender" placeholder="sexe" />
                    <input type="text" name="hairColor" placeholder="couleur de cheveux" />
                    <input type="text" name="planet" placeholder="planet" />
                    <input type="text" name="city" placeholder="ville" />
                    <input type="text" name="city2" placeholder="ville 2" />
                    <input type="text" name="team" placeholder="équipe" />
                    <input type="text" name="vehicle" placeholder="vehicule" />
                    <button className="btn-submit" type="submit">
                            Envoyer
                    </button>

            
                    <div className="pouvoir">
                        <h2 className="title-pouvoir">Pouvoir(s)</h2>

                            <input type="text" name="power1" placeholder="" />
                            <input type="text" name="power2" placeholder="" />
                            <input type="text" name="power3" placeholder="" />

                    </div>
                    <div className="gadget">
                        <h2 className="title-gadget">Gadget(s)</h2>

                            <input type="text" name="gadget1" placeholder="" />
                            <input type="text" name="gadget2" placeholder="" />
                    </div>
                </form>
            </div>
        </main>
    );
}
export default Configuration;