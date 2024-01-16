import "./Card.css";

const Card = (hero) => {
  return (
    <div className="Card">
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
  );
};

export default Card;
