import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
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
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  activeChallenge: ChallengeData;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const { currentExperience, 
          experienceToNextLevel, 
          levelUp, 
          addExperience, 
          addChallengeCompletedToCounter 
        } = useContext(ProfileContext);

  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const uniqueChallenge = challenges[randomChallengeIndex];
    
    setActiveChallenge(uniqueChallenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${uniqueChallenge.amount}xp!`
      });
    }
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    let newCurrentExperience = currentExperience + activeChallenge.amount;

    if(newCurrentExperience >= experienceToNextLevel) {
      newCurrentExperience = newCurrentExperience - experienceToNextLevel;
      levelUp();
    }

    addExperience(newCurrentExperience);
    setActiveChallenge(null);
    addChallengeCompletedToCounter();
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
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
