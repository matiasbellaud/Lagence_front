import "./Card.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Card = (hero) => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["idUser"]);

  const deleteHero = async (e) => {
    e.preventDefault();
    console.log(hero.info.id);
    await axios
      .post("http://localhost:8000/api/post/deleteHeroById", {
        idUser: cookies.idUser,
        idHero: hero.info.id,
      })
      .then(() => {
        window.location.reload();
        navigate("/");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const turnCard = () => {
    const cardElement = document.getElementById("Card");
    const cardSuppElement = document.getElementById("CardSupp");

    if (cardElement && cardSuppElement) {
      if (cardElement.style.display === "flex") {
        cardElement.style.display = "none";
        cardSuppElement.style.display = "flex";
      } else {
        cardElement.style.display = "flex";
        cardSuppElement.style.display = "none";
      }
    }
  };

  return (
    <>
      <div className="Card" id="Card" onClick={turnCard}>
        <h2 className="title-card">{hero.info.name}</h2>
        {
          <h4 className="team">
            Team :
            {hero.info.teams &&
              hero.info.teams.map((team, index) => (
                <span key={index}> {team}</span>
              ))}
          </h4>
        }
        <div className="card-content-1">
          <p className="description">Description : {hero.info.description}</p>
          <p className="sexe">Sexe : {hero.info.gender}</p>
          <p className="hair">Cheveux : {hero.info.hairColor}</p>
          <p className="planet">Planet : {hero.info.idHomePlanet}</p>
        </div>
        <div className="card-content-2">
          <p className="city">
            Ville(s) :
            {hero.info.cities &&
              hero.info.cities.map((city, index) => (
                <span key={index}>- {city}</span>
              ))}
          </p>
          <p className="powers">
            Powers :
            {hero.info.powers &&
              hero.info.powers.map((power, index) => (
                <span key={index}>- {power}</span>
              ))}
          </p>
          <p className="gadgets">
            Gadgets :
            {hero.info.gadgets &&
              hero.info.gadgets.map((gadget, index) => (
                <span key={index}>- {gadget}</span>
              ))}
          </p>
          <p className="vehicle">Véhicule : {hero.info.idVehicle}</p>
        </div>
      </div>
      <form
        className="CardSupp"
        id="CardSupp"
        onClick={turnCard}
        onSubmit={deleteHero}
      >
        <button type="submit" className="title-card">
          Supprimer
        </button>
      </form>
    </>
  );
};

export default Card;
