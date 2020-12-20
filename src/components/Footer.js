import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#000000",
    paddingBottom: 30
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "grey",
      "&:hover": {
        fontSize: "1.9rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} href="https://www.linkedin.com/in/martynas-%C4%8D-3a000355/" target="_blank" />
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} href="https://github.com/mcdev91" target="_blank" />
      <BottomNavigationAction icon={<Facebook />} className={classes.root} href="https://www.facebook.com/martynas.cizas" target="_blank" />
    </BottomNavigation>
  );
};
export default Footer;
