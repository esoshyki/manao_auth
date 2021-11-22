import { createContext, Dispatch, SetStateAction } from "react";
import { responseUserData } from '../auth/interfaces';

type userContextValue = {
  user: responseUserData | null,
  setUser: Dispatch<SetStateAction<any>> | null
};

const userContextDefaultValue: userContextValue = {
  user: null,
  setUser: null
};

const UserContext = createContext(userContextDefaultValue);

export default UserContext;