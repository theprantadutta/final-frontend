import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authenticatedUserData } from "../states/userStates";
import { baseURL } from "../utils/constants";

type authValues = {
  isAuthenticated: boolean;
  toggleAuth: (value: boolean) => void;
};

export const AuthContext = createContext({} as authValues);

interface authContextProps {}

const AuthContextProvider: React.FC<authContextProps> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const userData = useRecoilValue(authenticatedUserData);
  const toggleAuth = (value: boolean) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    const func = async () => {
      const { data } = await axios.get(`${baseURL}/api/is-authenticated`);
      if (data.token) {
        toggleAuth(true);
      } else {
        toggleAuth(false);
      }
    };
    func();
  }, [userData]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
