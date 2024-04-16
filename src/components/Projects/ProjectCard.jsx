import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Bridge } from "portfolio-proj/src/Bridge.jsx";
// import { Praxis1 } from "portfolio-proj/src/Praxis1.jsx";
// import { Makeuoft } from "portfolio-proj/src\Makeuoft.jsx";
// import { Praxis2 } from "portfolio-proj/src/Praxis2.jsx";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, details, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={details} className={styles.link}>
          Details
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bridge-project" component={Bridge} />
        <Route path="/cutlery-dispenser" component={Praxis1} />
        <Route path="/lockedin-project" component={Makeuoft} />
        <Route path="/cordage-compiler" component={Praxis2} />
      </Switch>
    </Router>
  );
}