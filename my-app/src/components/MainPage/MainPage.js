import "./MainPage.css";
import Nav from "./Nav/Nav";
import Card from "./Card/Card";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainPage() {
  const [heros, setHero] = useState([]);
  const [cookies] = useCookies(["idUser"]);
  const navigate = useNavigate();

  const bodyParameters = {
    idUser: cookies.idUser,
  };

  useEffect(() => {
    if (cookies.idUser == null) {
      navigate("/login");
      return;
    }

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
          <p className="">Aucun super-héro dans votre agence ...</p>
        ) : (
          heros.map((hero) => <Card info={hero} />)
        )}
      </section>
    </div>
  );
}

export default MainPage;
