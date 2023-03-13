import React from "react";
import classes from "./ProjectsSection.module.scss";
import ProjectsSectionCard from "./ProjectsSectionCard";

const sections = [
  {
    nazwa: "Sekcja aplikacji webowych, desktopowych i mobilnych",
    opis: "W tej sekcji możesz wzią udział w projektach które skupiają się na tworzeniu stron internetowych. Powstają tutaj także aplikacje użyteczne użytkownika jak i aplikacje mobilne.",
    key: Math.random(),
    img: (
      <img
        className={classes.smallImage}
        src="https://img.icons8.com/ios/50/null/programming.png"
      />
    ),
    technologie: "Głowne technologie w tej sekcji: ",
    wykaz: (
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>C#</li>
        <li>SCSS</li>
      </ul>
    ),
  },
  {
    nazwa: "Sekcja game DEV",
    opis: "Nauczysz się tu tworzyć gry 2D jak i 3D. Możesz także tworzyć różnego rodzaju aplikacje np.: blendery graficzne.",
    key: Math.random(),
    img: (
      <img
        className={classes.smallImage}
        src="https://img.icons8.com/ios/50/null/xbox-controller.png"
      />
    ),
    technologie: "Głowne technologie w tej sekcji: ",
    wykaz: (
      <ul>
        <li>C++</li>
        <li>C#</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    nazwa: "Sekcja drukarek 3D i elektroniki",
    opis: "Nauczysz się tu druku 3D. Tworzymy tutaj też projekty elektroniczne. Możesz samodzielnie stworzyć funkcjonalnego robota lub nawet mobilny dom!",
    key: Math.random(),
    img: (
      <img
        className={classes.smallImage}
        src="https://img.icons8.com/ios/50/null/print--v1.png"
      />
    ),
    technologie: "Głowne technologie w tej sekcji: ",
    wykaz: (
      <ul>
        <li>C</li>
        <li>C++</li>
        <li>Raspberry Pi</li>
        <li>Arduino</li>
      </ul>
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
