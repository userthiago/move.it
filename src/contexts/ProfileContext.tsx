import { createContext, ReactNode, useState } from 'react';

interface ProfileProviderProps {
  children: ReactNode;
}

interface ProfileContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  addExperience: (value: number) => void;
  experienceToNextLevel: number;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  
  function addExperience(value: number) {
    setCurrentExperience(value);
  }

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ProfileContext.Provider 
      value={{ 
        level,
        levelUp,
        currentExperience,
        addExperience,
        experienceToNextLevel
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
