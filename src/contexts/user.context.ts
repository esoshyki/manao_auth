import { createContext, Dispatch, SetStateAction } from "react";
import { responseUserData, noUserData } from '../auth/interfaces';

type userContextValue = {
  user: responseUserData | noUserData,
  setUser: Dispatch<SetStateAction<any>> | null
};

const userContextDefaultValue: userContextValue = {
  user: {
    role: "guest",
    userName: null
  },
  setUser: null
};

const UserContext = createContext(userContextDefaultValue);

export default UserContext;