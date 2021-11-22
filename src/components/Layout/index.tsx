import * as React from "react";
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
          <div className={classes.container}>
            <Header pageTitle={pageTitle} />
            {children}
          </div>
      </div>
  )
};

export default Layout;
