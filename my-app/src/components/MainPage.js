import "./MainPage.css";
import Nav from "./Nav";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useCookies } from "react-cookie";

function MainPage() {
  // const [cookies] = useCookies(["idUser"]);
  const [heros, setHero] = useState([]);

  const bodyParameters = {
    idUser: 1, //cookies.idUser,
  };

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/post/getHeroesByUser", bodyParameters)
      .then((response) => {
        setHero(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="MainPage">
      <Nav />
      <section className="cards">
        {heros.length == 0 ? (
          <p className="">Aucun évènements</p>
        ) : (
          heros.map((hero) => <Card info={hero} />)
        )}
      </section>
    </div>
  );
}

export default MainPage;
