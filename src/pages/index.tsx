import { useState } from "react";
import Button from "../components/Button";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const maxExperience = 300;
  const [experience, setExperience] = useState(50);

  return (
    <div className={styles.container}>
      <ExperienceBar maxExperience={maxExperience} actualExperience={experience} />
      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
