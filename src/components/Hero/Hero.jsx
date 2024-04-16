import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
// import resumePdf from '../../assets/hero/PraxisResume.pdf';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Joseph Mi</h1>
        <p className={styles.description}>
          I'm an Engineering Science Student at the University of Toronto. 
        </p>
        <p className={styles.portfolio}>
        This portfolio showcases my a few of my completed projects since September 2023. It will include four different projets: two completed within the Praxis curriculum, one within the CIV102 curriculum, and another for the MakeUofT 2024 hackathon. Please click on the "Source" button for a general overview of the project and the "Details" button for a detailed description of the solution. 
        </p>
        <a href="../../assets/hero/PraxisResume.pdf" download="JosephMi_CV.pdf" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
