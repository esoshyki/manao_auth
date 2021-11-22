import { Routes, Route } from "react-router-dom";
import Home from './pages/home/';
import Profile from './pages/profile/';
import { useState } from 'react';
import UserContext from "./contexts/user.context";

function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/home" element={<Home />} />
        <Route path="pages/profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
