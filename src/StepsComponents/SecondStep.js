import logo from "./images/bird.png";
import logo2 from "./images/slap.png";
import logo3 from "./images/ufo.png";
import logo4 from "./images/watermelon.png";
import logo5 from "./images/eye.png";
import logo6 from "./images/cell.png";
import logo7 from "./images/woman.png";
import logo8 from "./images/cactus.png";
import logo9 from "./images/cam.png";
import logo10 from "./images/banana.png";
import logo11 from "./images/bird2.png";
import logo12 from "./images/girl.png";
import logo13 from "./images/boy.png";
import logo14 from "./images/pc.png";
import logo15 from "./images/boy2.png";
import logo16 from "./images/watermelon2.png";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SecondStep = ({ classes, handleSticker }) => {
  const imagesArray = [
    logo,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
  ];
  const stickers = imagesArray.map((url) => {
    const img = document.createElement("img");
    img.src = url;
    return { img, url };
  });

  return (
    <Container
      style={{
        backgroundColor: "white",
        borderRadius: "45px",
        paddingBottom: "3rem",
      }}
    >
      <header style={{ color: "black" }} className={classes.Header}>
        <h1
          style={{ fontSize: "5rem", fontWeight: "normal", marginTop: "3rem" }}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Choose-A-<span style={{ color: "red" }}>S</span>ticker
        </h1>
        <p
          style={{ fontFamily: "Raleway" }}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </p>
      </header>
      <section className={classes.Stickers}>
        <Row data-aos="fade-right" data-aos-duration="2000">
          {stickers &&
            stickers.map((item) => (
              <Col xs="12" sm="3" style={{ padding: "2px" }}>
                <input
                  type="image"
                  src={item.url}
                  onClick={() => handleSticker(item)}
                  width="80%"
                />
              </Col>
            ))}
        </Row>
      </section>
    </Container>
  );
};

export default SecondStep;
