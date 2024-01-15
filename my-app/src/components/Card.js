import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <h2 className="title-card">Nom</h2>
      <h4 className="team">Team : Noob</h4>
      <div className="card-content-1">
        <p className="sexe">Sexe : Homme</p>
        <p className="hair">Cheveux : Noir</p>
        <p className="planet">Planet : Terre</p>
        <p className="city">Ville : Paris</p>
      </div>
      <div className="card-content-2">
        <p className="superpower">Super pouvoir : Aucun</p>
        <p className="powers">
          Powers : <span>.</span> <span>.</span> <span>.</span>
        </p>
        <p className="gadgets">
          Gadgets : <span>.</span> <span>.</span> <span>.</span>
        </p>
        <p className="vehicle">Véhicule : Moto</p>
      </div>
    </div>
  );
}

export default Card;
