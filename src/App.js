import { createUseStyles } from "react-jss";
// import logo from './logo.svg'
import ReadMe from "./ReadMe";
import StepsComponent from "./StepsComponents/StepsComponent";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

import { Switch, Route, Redirect } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  body: {
    fontFamily: "Raleway",
    backgroundColor: theme.palette.primary,
  },

  App: {
    background: theme.palette.primary,
    maxWidth: "100%",
    minHeight: "100%",
    "& a": {
      color: theme.palette.text,
    },
  },
  Header: {
    "&  h1": {
      fontFamily: "Raleway",
      cursor: "pointer",
      fontSize: "4rem",
      marginTop: "8rem",
    },
  },
  Main: {
    background: theme.palette.secondary,

    "& canvas": {
      width: "100%",
      height: "auto",
    },
    "& video": {
      display: "none",
    },
  },
  Stickers: {
    "& img": {
      height: "4rem",
    },
  },
  Gallery: {
    "& img": {
      height: "16rem",
    },
  },
  Picture: {
    background: "white",
    padding: 4,
    position: "relative",
    display: "inline-block",
    "& h3": {
      padding: 8,
      textAlign: "center",
      width: "100%",
    },
  },
}));

function App(props) {
  // css classes from JSS hook
  const classes = useStyles(props);

  return (
    <Container fluid className={classes.App}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <StepsComponent classes={classes} />
        </Route>
        <Route path="/readme">
          <ReadMe />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
