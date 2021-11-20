import { createContext } from "react";

const UserContext = createContext({
  user: null,
  inProcess: false,
});

export default UserContext;