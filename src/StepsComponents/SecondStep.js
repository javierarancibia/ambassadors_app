import logo from "./images/cat.png";
import logo2 from "./images/cat.png";
import logo3 from "./images/cat.png";
import logo4 from "./images/cat.png";
import logo5 from "./images/cat.png";
import logo6 from "./images/cat.png";
import { Container, Row, Col } from "react-bootstrap";

const SecondStep = ({ classes, handleSticker }) => {
  const imagesArray = [logo, logo2, logo3, logo4, logo5, logo6];
  const stickers = imagesArray.map((url) => {
    const img = document.createElement("img");
    img.src = url;
    return { img, url };
  });

  return (
    <Container>
      <h2 style={{ color: "white" }}>Step 2: select your sticker...</h2>
      <section className={classes.Stickers}>
        <Row>
          {stickers &&
            stickers.map((item) => (
              <Col xs="12" sm="4">
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
