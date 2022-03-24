const Header = ({ classes }) => {
  return (
    <header style={{ color: "white" }} className={classes.Header}>
      <h1>SlapSticker</h1>
      <p style={{ fontFamily: "Raleway" }}>
        Have you ever said something so dumb, you just wanted to slap yourself?
        Well now you can!
      </p>
    </header>
  );
};

export default Header;
