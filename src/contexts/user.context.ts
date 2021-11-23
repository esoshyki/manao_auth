import { createContext, Dispatch, SetStateAction } from "react";
import { SafeUserData, NoUserData } from '../interfaces/auth';

type userContextValue = {
  user: SafeUserData | NoUserData,
  setUser: Dispatch<SetStateAction<any>> | null
};

const userContextDefaultValue: userContextValue = {
  user: {
    role: "guest",
    userName: null,
    login: null
  },
  setUser: null
};

const UserContext = createContext(userContextDefaultValue);

export default UserContext;