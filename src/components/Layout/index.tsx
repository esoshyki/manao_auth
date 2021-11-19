import * as React from "react";
import classes from './style.module.sass';
import { Link } from "react-router-dom";

export interface LayoutProps {
  pageTitle?: string,
  children: React.ReactNode
};

const Layout = ({
  children,
  pageTitle = "PageTitle",
}: LayoutProps) => {
  return (
      <div>
        <header className={classes.header}>
          <div className={classes.header_logo}>
            <h1 className={classes.header_logo_h1}>{pageTitle}</h1>
          </div>

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
        </header>
        {children}
      </div>
  )
};

export default Layout;
