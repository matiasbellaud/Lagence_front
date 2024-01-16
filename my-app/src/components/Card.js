import "./Card.css";

function Card() {
  const [hero, setHero] = useState([]);

  const bodyParameters = {
    idUser: cookies.idUser,
  };

  useEffect(() => {
    console.log(cookies.idUser);
    axios
      .post("http://localhost:3001/api/clubs/getOneById", bodyParameters)
      .then((response) => {
        setHero(response.data["hero"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="Card">
      <h2 className="title-card">{hero.name}</h2>
      <h4 className="team">Team : {hero.team}</h4>
      <div className="card-content-1">
        <p className="sexe">Sexe : {hero.sexe}</p>
        <p className="hair">Cheveux : {hero.hairColor}</p>
        <p className="planet">Planet : {hero.planet}</p>
        <p className="city">
          Ville(s) :
          {hero.city.map((event) => (
            <span>{event}</span>
          ))}
        </p>
      </div>
      <div className="card-content-2">
        <p className="powers">
          Powers :
          {hero.powers.map((power) => (
            <span>{power}</span>
          ))}
        </p>
        <p className="gadgets">
          Gadgets :
          {hero.gadgets.map((gadget) => (
            <span>{gadget}</span>
          ))}
        </p>
        {hero.vehicle != null && (
          <p className="vehicle">Véhicule : {hero.vehicle}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
