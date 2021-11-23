import { Routes, Route } from "react-router-dom";
import Home from './pages/home/';
import Profile from './pages/profile/';
import Admin from "./pages/admin";
import About from './pages/about';
import Forbidden from "./pages/forbidden";
import { useState, ReactElement } from 'react';
import UserContext from "./contexts/user.context";

const roles = {
  admin: "admin",
  user: "user",
  guest: "guest"
}

interface secureRoute {
  roles: Array<string>;
  path: string;
  element: ReactElement
}

function App() {

  const [user, setUser] = useState({
    role: roles.guest,
    userName: null,
    login: null
  });

  const SequireRoute = (route: secureRoute) => {
    if (route.roles.includes(user.role)) {

      return <Route path={route.path} element={route.element} />
    }
    return <Route path={route.path} element={<Forbidden />} />
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      
      <Routes>
        {SequireRoute({
          path: "/",
          element: <Home />,
          roles: [roles.admin, roles.guest, roles.user]
        })}
        {SequireRoute({
          path: "/about",
          element: <About />,
          roles: [roles.admin, roles.guest, roles.user]
        })}
        {SequireRoute({
          path: "/home",
          element: <Home />,
          roles: [roles.admin, roles.guest, roles.user]
        })}
        {SequireRoute({
          path: "/profile",
          element: <Profile />,
          roles: [roles.admin, roles.user]
        })}
        {SequireRoute({
          path: "/admin",
          element: <Admin />,
          roles: [roles.admin]
        })}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
