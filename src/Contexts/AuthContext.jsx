/* eslint-disable react/prop-types */
import { createContext } from "react";

export let authContext = createContext();
const AuthContext = ({ children }) => {
  let abiss = { Name: "Yasin" };

  return <authContext.Provider value={abiss}>{children}</authContext.Provider>;
};

export default AuthContext;
