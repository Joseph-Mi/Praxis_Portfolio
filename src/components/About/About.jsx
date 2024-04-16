import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.small}>
        I consider myself primarily an engineering student, but also a learner and architect. I view the world as an endless opportunity for learning and engagement, without boundaries of age or context. As an architect, I enjoy devising solutions for various problems, fueled by my vivid imagination.
      </p>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Engineering Student</h3>
              <p className={styles.small}>
              As an engineering student, I am compelled to learn more about my discipline both inside and outside the classroom. Some recent topics I have encountered are electrical circuits, localization technologies, game development, CAN bus messaging, and GPS utilization.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Learner</h3>
              <p>
                As a devoted learner, I am continually inspired by the evolving theories and technologies that expand my understanding of the field of engineering. This passion for knowledge compels me to delve into the complexities and human impacts of engineering challenges, ensuring my solutions are well-rounded and deeply considered. Through this relentless pursuit of understanding, I approach every engineering problem with a commitment to uncovering and addressing both its fundamental and potential future issues with innovative and authentic solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Architect</h3>
              <p>
                My childhood LEGO experiences shaped me into an architect-minded engineer, where I blend creativity with simplicity to turn complex ideas into innovative, functional solutions. This early hands-on play instilled in me a meticulous attention to detail and a passion for designing impactful technologies.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className={styles.title}> Values </h2>
      <div className={styles.content}>
      <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Growth and Development</h3>
              <p className={styles.small}>
              I believe one of the most important ideals within engineering design is growth and development. Engineering is defined as the practice of solving technical problems, increasing efficiency, and improving systems—a strive for betterment. Aligning with this pursuit, I aim to create things that drive the world to be better. Day by day, I aim for myself to be better. It is not the creation of something perfect that brings me the feeling of accomplishment, but the creation of something that both improves the current situation and can be improved to accommodate for changing circumstances.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Morality</h3>
              <p>
              While success in engineering design can be interpreted in various ways, I believe it should always be pursued with a foundation of righteousness. Whatever my goals or creations may be, I am committed to maintaining moral integrity throughout the process.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Ambition</h3>
              <p>
                My ambition keeps me accountable, encouraging me to set goals beyond the status quo. I thrive on challenging myself, and I believe that this is where learning truly occurs. As a student, I have recognized that failures, as successes, are stepping stones to growth. This pursuit of excellence motivates me to challenge my limits and advance both personally and professionally.
              </p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  );
};
