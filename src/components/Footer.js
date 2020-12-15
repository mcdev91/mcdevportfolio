import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#000000",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "grey",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} href="https://www.facebook.com/martynas.cizas" target="_blank" />
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} href="https://www.linkedin.com/in/martynas-%C4%8D-3a000355/" target="_blank" />
    </BottomNavigation>
  );
};
export default Footer;
