import Head from 'next/head';

import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";
import Menu from '../components/Menu';
import RegisterModal from '../components/RegisterModal';

import styles from '../styles/pages/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <Header />
      <Menu />
      <ExperienceBar />
      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      <RegisterModal />
    </div>
  );
}
