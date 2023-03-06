import React from "react";
import classes from "./ProjectsSection.module.scss";
import ProjectsSectionCard from "./ProjectsSectionCard";

const sections = [
  {
    nazwa: "Sekcja aplikacji webowych, desktopowych i mobilnych",
    opis: "Ta sekcja zajmuje się budowanie aplikacji webowych, desptopowych i mobilnych",
    key: Math.random(),
  },
  {
    nazwa: "Sekcja game DEV",
    opis: "Ta sekcja zamuje się tworzeniem gier, aplikacji blenderowych ipt.",
    key: Math.random(),
  },
  {
    nazwa: "Sekcja drukarek 3D i retro",
    opis: "Uczymy się tu druku 3D, starych systemów operacyjnych itp.",
    key: Math.random(),
  },
];

const ProjectsSection = () => {
  return (
    <div className={classes.projects}>
        <ProjectsSectionCard items={sections}></ProjectsSectionCard>
    </div>
  );
};

export default ProjectsSection;
