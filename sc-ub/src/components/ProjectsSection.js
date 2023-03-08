import React from "react";
import classes from "./ProjectsSection.module.scss";
import ProjectsSectionCard from "./ProjectsSectionCard";

const sections = [
  {
    nazwa: "Sekcja aplikacji webowych, desktopowych i mobilnych",
    opis: "Ta sekcja zajmuje się budowanie aplikacji webowych, desptopowych i mobilnych.",
    key: Math.random(),
    img: (
      <img
        className={classes.smallImage}
        src="https://img.icons8.com/ios/50/null/programming.png"
      />
    ),
  },
  {
    nazwa: "Sekcja game DEV",
    opis: "Ta sekcja zamuje się tworzeniem gier, aplikacji blenderowych ipt.",
    key: Math.random(),
    img: (
      <img
        className={classes.smallImage}
        src="https://img.icons8.com/ios/50/null/xbox-controller.png"
      />
    ),
  },
  {
    nazwa: "Sekcja drukarek 3D i retro",
    opis: "Uczymy się tu druku 3D, starych systemów operacyjnych itp.",
    key: Math.random(),
    img: (
      <img
        className={classes.smallImage}
        src="https://img.icons8.com/ios/50/null/print--v1.png"
      />
    ),
  },
];

const ProjectsSection = () => {
  const paragraph = "Sekcje w jakich możesz się rozwijać to m.in.:";

  return (
    <React.Fragment>
      <h2 className={classes.paragraph}>{paragraph}</h2>
      <div className={classes.row}>
        <ProjectsSectionCard
          //className={classes.projects_cards}
          items={sections}
        ></ProjectsSectionCard>
      </div>
    </React.Fragment>
  );
};

export default ProjectsSection;
