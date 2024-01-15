import "./MainPage.css";
import Nav from "./Nav";
import Card from "./Card";

function MainPage() {
  return (
    <div className="MainPage">
      <Nav />
      <section className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default MainPage;
