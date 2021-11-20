import { useContext, useState } from "react";
import UserContext from "./user.context";
import { Link } from "react-router-dom";
import classes from './style.module.sass';
import Sign from '../Forms/Sign';

interface HeaderProps {
  pageTitle: string
};

const Header = ({pageTitle}: HeaderProps) => {

  const { user, inProcess } = useContext(UserContext);
  const [showSignForm, setSHowSignForm] = useState(false);

  return (
    <header className={classes.header}>

        <div className={classes.header_logo}>
          <h1 className={classes.header_logo_h1}>{pageTitle}</h1>
        </div>
        <div className={classes.header_content}>
        <nav className={classes.header__nav}>
          <Link 
            to="../pages/home" 
            className={classes.header__nav_link + (pageTitle==="Home" ? ` ${classes.chosen_link}` : "")}>
            Home
          </Link>
          <Link to="../pages/profile" className={classes.header__nav_link + (pageTitle === "Profile" ? ` ${classes.chosen_link}` : "")}>
            Profile
          </Link>
        </nav>
        {user && <button className={classes.header__user_button}>{user}</button>}
        {!user && <button 
          className={classes.header__user_button}
          onClick={() => setSHowSignForm(true)}
          >
            Sign
          </button>}
        {showSignForm && <Sign hide={() => setSHowSignForm(false)} />}
      </div>
    </header>
  )
  
};

export default Header;