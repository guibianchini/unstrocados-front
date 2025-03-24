import React, { createContext, useState, useContext } from "react";

interface AppContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  isSensitiveInfoVisible: boolean;
  toggleSensitiveInfoVisibility: () => void;
  setIsSensitiveInfoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const [isSensitiveInfoVisible, setIsSensitiveInfoVisible] =
    useState<boolean>(false);
  const toggleSensitiveInfoVisibility = () =>
    setIsSensitiveInfoVisible((old) => !old);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isSensitiveInfoVisible,
        toggleSensitiveInfoVisibility,
        setIsSensitiveInfoVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
