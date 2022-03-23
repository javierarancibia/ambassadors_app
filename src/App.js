import { createUseStyles } from "react-jss";
// import logo from './logo.svg'
import ReadMe from "./ReadMe";
import Header from "./Header";
import StepsComponent from "./StepsComponents/StepsComponent";
import NavBar from "./NavBar";

import { Switch, Route, Redirect } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    fontFamily: "sans-serif",
  },

  App: {
    padding: "50px",
    background: theme.palette.primary,
    maxWidth: "100%",
    minHeight: "600px",
    margin: "auto",
    "& a": {
      color: theme.palette.text,
    },
  },
  Header: {
    "&  h1": {
      fontFamily: "sans-serif",
      cursor: "pointer",
      fontSize: "4rem",
    },
  },
  Main: {
    background: theme.palette.secondary,

    "& canvas": {
      width: "20%",
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
    background: "black",
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
    <div className={classes.App}>
      <NavBar />
      <Header classes={classes} />
      <Switch>
        <StepsComponent classes={classes} />
        <Route path="/" exact></Route>
        <Route path="/readme">
          <ReadMe />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
