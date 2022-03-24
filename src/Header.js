import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header = ({ classes }) => {
  return (
    <header style={{ color: "white" }} className={classes.Header}>
      <h1
        style={{ fontSize: "5rem", fontWeight: "normal" }}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        Slap<span style={{ color: "red" }}>S</span>ticker
      </h1>
      <p
        style={{ fontFamily: "Raleway", fontWeight: "bold" }}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        Have you ever said something so dumb, you just wanted to slap yourself?
        Well now you can!
      </p>
    </header>
  );
};

export default Header;
