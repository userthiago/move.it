import { createContext, useState, ReactNode, useContext } from 'react';
import { ProfileContext } from './ProfileContext';

import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengeData {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  completedChallenges: number;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeChallenge: ChallengeData;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const {level, currentExperience, experienceToNextLevel, levelUp, addExperience} = useContext(ProfileContext);

  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    
    setActiveChallenge(challenge);
  }

  function completeChallenge() {
    const newCurrentExperience = currentExperience + activeChallenge.amount;
    if(newCurrentExperience >= experienceToNextLevel) {
      addExperience(newCurrentExperience - experienceToNextLevel);
      levelUp();
    } else {
      addExperience(newCurrentExperience);
    }
    setCompletedChallenges(completedChallenges + 1);
    setActiveChallenge(null);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        completedChallenges, 
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        activeChallenge, 
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
