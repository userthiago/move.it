import { createContext, ReactNode, useState } from "react";

interface MenuProviderProps {
  children: ReactNode;
}

interface MenuContextData {
  isMenuActive: boolean;
  changeMenuState: () => void;
}

export const MenuContext = createContext({} as MenuContextData);

export function MenuProvider({ children }: MenuProviderProps) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function changeMenuState() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <MenuContext.Provider value={{
      isMenuActive,
      changeMenuState
    }}>
      { children }
    </MenuContext.Provider>
  );
}