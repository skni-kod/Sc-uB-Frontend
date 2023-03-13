import React from "react";
import classes from "./ProjectsSectionCard.module.scss";

const ProjectsSectionCard = (props) => {
  return (
    <React.Fragment>
      {props.items.map((dane) => {
        return (
          <div className={classes.col1of2}>
            <div key={dane.key} className={classes.card}>
              <div className={`${classes.card__side} ${classes.card__side__front}`}>
                <div className={classes.card__front_icon}>{dane.img}</div>
                <div className={classes.card__front_name}>{dane.nazwa}</div>
                <div className={classes.card__front_desription}>{dane.opis}</div>
                <div className={classes.card__front_tech}>{dane.technologie}</div>
                <div className={classes.card__front_lista}>{dane.wykaz}</div>
              </div>
              <div className={`${classes.card__side} ${classes.card__side__back}`}></div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectsSectionCard;
