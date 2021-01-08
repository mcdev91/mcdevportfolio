import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typist from 'react-typist';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000000",
    marginTop: 56
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #dedede",
      right: "40px",
      top: 0,
      backgroundColor: "#dedede"
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "3px solid #dedede",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#dedede #dedede transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#dedede",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #dedede #dedede",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#000000",
    background: "#dedede",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    borderRadius: 50,
    border: 'none',
    userSelect: "none",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#dedede",
    padding: "3rem 0",
    textTransform: "uppercase",
    userSelect: "none"
  },
  subHeading: {
    color: "#dedede",
    padding: 0,
    textTransform: "uppercase",
    userSelect: "none"
  },
  body1: {
    color: "red",
    textAlign: "center",
    zIndex: 1,
    height: 95,
    userSelect: "none",
    fontSize: 15
  },
  body2: {
    color: "red",
    textAlign: "center",
    zIndex: 1,
    height: 210,
    userSelect: "none"
  },
  body3: {
    color: "red",
    textAlign: "center",
    zIndex: 1,
    height: 250,
    userSelect: "none"
  },
  subtitle1: {
    color: "#dedede",
    userSelect: "none"
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Completed courses
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Ultimate Web Designer & Developer Course:
            Design, Front & Back-End Programming
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
            Technologies:
          </Typography>
          <Typist
            className={classes.body1}
            avgTypingDelay={30}
          >
            <Typist.Delay ms={500} />
            <span>Photoshop</span>
            <br />
            <span>HTML5, CSS3</span>
            <br />
            <span>JavaScript</span>
            <br />
            <span>PHP, MySQL</span>
            <br />
            <span>AngularJS (basics)</span>
          </Typist>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Front End Advanced Course
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
            Technologies:
          </Typography>
          <Typist
            className={classes.body2}
            avgTypingDelay={30}
          >
            <Typist.Delay ms={500} />
            <span>Teamwork, Agile</span>
            <br />
            <span>Project management</span>
            <br />
            <span>HTML5, CSS3</span>
            <br />
            <span>Responsive design.</span>
            <br />
            <span>Advanced JavaScript</span>
            <br />
            <span>React</span>
            <br />
            <span>Node, Express, NoSQL.</span>
            <br />
            <span>restfulAPI, FireBase</span>
            <br />
            <span>Debugging, GIT</span>
            <br />
            <span>Application testing</span>
            <br />
            <span>Error handling</span>
          </Typist>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        {/* haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            The Complete Web developer: zero to mastery
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}>
            Technologies:
          </Typography>
          <Typist
            className={classes.body3}
            avgTypingDelay={30}
          >
            <Typist.Delay ms={500} />
            <span>DOM Manipulation</span>
            <br />
            <span>Asynchronous JavaScript</span>
            <br />
            <span>HTTP/JSON/AJAX.</span>
            <br />
            <span>React + Redux</span>
            <br />
            <span>Git</span>
            <br />
            <span>Command Line.</span>
            <br />
            <span>Node, Express, NPM</span>
            <br />
            <span>restfulAPI Design</span>
            <br />
            <span>PostgresSQL, SQL</span>
            <br />
            <span>Authentication, Authorization</span>
            <br />
            <span>Scalable Infrastructure</span>
            <br />
            <span>Security</span>
            <br />
            <span>Production and Deployment</span>
          </Typist>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;