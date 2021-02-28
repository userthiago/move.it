import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface ProfileProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface ProfileContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  addExperience: (value: number) => void;
  experienceToNextLevel: number;
  percentToNextLevel: number;
  challengesCompleted: number;
  addChallengeCompletedToCounter: () => void;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ 
  children, 
  ...rest
}: ProfileProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);
  
  function addExperience(value: number) {
    setCurrentExperience(value);
  }

  function levelUp() {
    setLevel(level + 1);
  }

  function addChallengeCompletedToCounter() {
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  return (
    <ProfileContext.Provider 
      value={{ 
        level,
        levelUp,
        currentExperience,
        addExperience,
        experienceToNextLevel,
        percentToNextLevel,
        challengesCompleted,
        addChallengeCompletedToCounter,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
