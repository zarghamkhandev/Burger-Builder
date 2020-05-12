import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxi from "../../../hoc/Auxi";

const sideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer, classes.Close];
  return (
    <Auxi>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxi>
  );
};

export default sideDrawer;
