import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FullResume from "./components/FullResume";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nanum Gothic Coding',
      'cursive',
    ].join(','),
  },
});

function App() {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/fullresume" component={FullResume} />
      </Switch>
    </ThemeProvider>
    
    </React.Fragment>
  );
}

export default App;
