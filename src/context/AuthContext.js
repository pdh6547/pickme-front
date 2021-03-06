import React, { createContext, useState } from "react";
import { api } from "../api";

const AuthContext = createContext();
const { Provider, Consumer: AuthConsumer } = AuthContext;

const AuthProvider = props => {
  const [user, _setUser] = useState({});
  const [userAuthorized, _setUserAuthorized] = useState(false);

  const checkUserAuth = async () => {
    try {
      const res = await  api.get(`/accounts`);
      console.log(res);
      if(res.status === 200) {
        _setUserAuthorized(true);
        _setUser(res.data);
        return true;
      }
    } catch (err) {
      _setUserAuthorized(false);
      console.log(err);
      return false;
    }
  };

  const state = { user, userAuthorized };
  const actions = { checkUserAuth };

  return <Provider value={{ state, actions }}>{props.children}</Provider>;
};

export { AuthContext, AuthProvider, AuthConsumer };
