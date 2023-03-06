import React from "react";
import classes from "./ProjectsSectionCard.module.scss";

const ProjectsSectionCard = (props) => {
  return (
    <React.Fragment>
      {props.items.map((dane) => {
        return (
          <div key={dane.key}>
            <div>{dane.nazwa}</div>
            <div>{dane.opis}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectsSectionCard;
