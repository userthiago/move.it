import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";
import Menu from '../components/Menu';

import { ProfileProvider } from '../contexts/ProfileContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { MenuProvider } from '../contexts/MenuContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ProfileProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
        <ChallengesProvider>
          <CountdownProvider>
            <MenuProvider>
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
              </div>
            </MenuProvider>
          </CountdownProvider>
        </ChallengesProvider>
    </ProfileProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}