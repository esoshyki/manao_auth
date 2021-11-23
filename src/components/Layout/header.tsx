import { useContext, useState } from "react";
import UserContext from "../../contexts/user.context";
import { Link } from "react-router-dom";
import classes from './style.module.sass';
import Sign from '../Forms/Sign';
import links from './links.json';

interface HeaderProps {
  pageTitle: string,
};

type LinkData = {
  path: string;
  title: string;
  roles: Array<string>
};

const Header = ({pageTitle}: HeaderProps) => {

  const { user, setUser } = useContext(UserContext);
  const [showSignForm, setSHowSignForm] = useState(false);

  const CustomLink = (linkData: LinkData, key: number) => {
    return linkData.roles.includes(user.role) ? (
    <Link 
      key={key}
      to={linkData.path} 
      className={classes.header__nav_link + (pageTitle===linkData.title ? ` ${classes.chosen_link}` : "")}>
        {linkData.title}
      </Link>) : null
    }

  return (
    <header className={classes.header}>

        <div className={classes.header_logo}>
          <h1 className={classes.header_logo_h1}>{pageTitle}</h1>
        </div>
        <div className={classes.header_content}>
        <nav className={classes.header__nav}>

        {links.map((linkData: LinkData, idx) => {
          return CustomLink(linkData, idx)
        })}

        </nav>
        <h2 className={classes.header__user_gratz}>{`Hello, ${user.userName || "Guest! Please, sign in"}!`}</h2>

        {user.role !== "guest" && (
          <button 
            className={classes.header__user_button}
            onClick={() => {
              if (setUser) setUser({role: "guest", userName: null});
              window.sessionStorage.removeItem("user");
            }}
            >
              Logout
          </button>
          )}

        {user.role === "guest" && <button 
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