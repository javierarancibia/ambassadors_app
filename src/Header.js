const Header = ({ classes }) => {
  return (
    <header style={{ color: "white" }} className={classes.Header}>
      <h1 style={{ fontSize: "5rem", fontWeight: "normal" }}>
        Slap<span style={{ color: "red" }}>S</span>ticker
      </h1>
      <p style={{ fontFamily: "Raleway" }}>
        Have you ever said something so dumb, you just wanted to slap yourself?
        Well now you can!
      </p>
    </header>
  );
};

export default Header;
