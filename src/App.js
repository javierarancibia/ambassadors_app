import { createUseStyles } from "react-jss";
// import logo from './logo.svg'
import ReadMe from "./ReadMe";
import Header from "./Header";
import StepsComponent from "./StepsComponent";

import { Switch, Route, Redirect } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
    fontFamily: "sans-serif",
  },

  App: {
    padding: "20px",
    background: theme.palette.primary,
    maxWidth: "800px",
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
