import { createUseStyles } from "react-jss";
import { useState } from "react";
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
    background: "#191D21",
    borderRadius: "45px",

    "& canvas": {
      width: "80%",
      height: "auto",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "55px",
    },
    "& video": {
      display: "none",
    },
  },
  Stickers: {
    "&:hover": {
      transform: "scale(1.1)",
    },
    "& img": {
      height: "2rem",
    },
  },
  Gallery: {
    "& img": {
      height: "16rem",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "55px",
      marginTop: "2rem",
    },
  },
  Picture: {
    background: "#191D21",
    padding: 4,
    position: "relative",
    display: "block",
    borderRadius: "50px",
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

  const [UiNumber, setUiNumber] = useState();
  const getUi = (Ui) => {
    setUiNumber(Ui);
    console.log(Ui);
  };

  return (
    <Container fluid className={classes.App}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <StepsComponent classes={classes} getUi={getUi} />
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
