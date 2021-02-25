import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { DEFAULT_TIMER } from '../helpers/constants';
import { ChallengesContext } from './ChallengesContext';

interface TimeProviderProps {
  children: ReactNode;
}

interface TimeContextData {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
  changeCountdown: () => void;
  resetCountdown: () => void;
}

export const TimeContext = createContext({} as TimeContextData);

let countdownTimeout: NodeJS.Timeout;

export function TimeProvider({ children }: TimeProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);
  
  const [time, setTime] = useState(DEFAULT_TIMER);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  function changeCountdown() {
    setIsActive(!isActive);

    if(isActive) {
      clearTimeout(countdownTimeout);
      setTime(DEFAULT_TIMER);
    }
  }

  function resetCountdown() {
    setTime(DEFAULT_TIMER);
    setIsActive(false);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  
  return (
    <TimeContext.Provider 
      value={{ 
        time,
        isActive,
        hasFinished,
        changeCountdown,
        resetCountdown,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
}
