import * as React from "react";
import UserContext from "./user.context";
import Header from "./header";
import classes from './style.module.sass';

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
        <UserContext.Provider value={{inProcess: false, user: null}}>
          <div className={classes.container}>
            <Header pageTitle={pageTitle} />
            {children}
          </div>
        </UserContext.Provider>
      </div>
  )
};

export default Layout;
