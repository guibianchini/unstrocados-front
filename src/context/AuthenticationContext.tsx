import React, { createContext, useState, useContext } from "react";

interface AuthenticationContextType {
  isLoggedIn: boolean;
}

const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

interface Props {
  children: React.ReactNode;
}

export const AuthenticationProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn] = useState<boolean>(false);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = (): AuthenticationContextType => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error(
      "useAuthenticationContext must be used within an AuthenticationProvider"
    );
  }
  return context;
};
