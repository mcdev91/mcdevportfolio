import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "grey",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} icon={<PersonIcon/>} alt="Martynas Čižas" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Martynas Čižas"]} typeSpeed={10} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Web Developer",
          ]}
          typeSpeed={100}
          backSpeed={10}
        />
        <Typography>
          <Typed
            strings={[
              "Technologies I Use:"]}
            typeSpeed={100}
            backSpeed={10}
            loop
          />
        </Typography>
        <Typography>
          <Typed
            strings={[
              "React, Node, Express, NPM, HTML, CSS"]}
            typeSpeed={60}
            backSpeed={10}
          />
        </Typography>
      </Typography>
    </Box>
  );
};

export default Header;
