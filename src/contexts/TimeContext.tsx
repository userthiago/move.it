import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
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
  const defaultTime = 0.1 * 60;
  
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  function changeCountdown() {
    setIsActive(!isActive);

    if(isActive) {
      clearTimeout(countdownTimeout);
      setTime(defaultTime);
    }
  }

  function resetCountdown() {
    setTime(defaultTime);
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
