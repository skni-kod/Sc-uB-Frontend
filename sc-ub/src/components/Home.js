import React from "react";
import classes from "./Home.module.scss";
import Logo from "../Photos/logo.png";
import SectionsCard from "./SectionCard";

const Home = () => {
  const h1text = "Studenckie koło naukowe - kod";
  const p1 =
    "Nasze koło gromadzi osoby które chcą się rozwijać jako programiści. Daje duże możliwości samorozwojowe. Nasi członkowie pracują w zespołach, co przygotowuje ich do podjęcia pracy zawodowej.";

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={`${classes.header__description}`}>
          <h1 className={classes.header__description__h1}>{h1text}</h1>
          <p className={classes.header__description__p}>{p1}</p>
        </div>
        <img className={`${classes.header__photo}`} src={Logo} alt="Logo"></img>
      </div>
    </React.Fragment>
  );
};

export default Home;
