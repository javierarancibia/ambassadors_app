import { useState } from "react";
import Header from "../Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Container, Row, Col } from "react-bootstrap";
// import image from "../images/selfie.png";

const StepsComponent = ({ classes }) => {
  const [sticker, setSticker] = useState();
  const [title, setTitle] = useState("SLAPPE!");
  const [Ui, setUi] = useState("1");

  const obtainUi = (currentUi) => {
    setUi(currentUi);
    console.log(Ui);
  };

  const handleTitle = (name) => {
    setTitle(name);
    console.log(title);
  };

  const handleSticker = (sticker) => {
    setSticker(sticker);
    console.log(sticker);
  };

  return (
    <Container>
      {Ui === "1" && (
        <Row>
          <Col>
            <Header classes={classes} />
            <FirstStep
              classes={classes}
              handleTitle={handleTitle}
              onGetUi={obtainUi}
            />
          </Col>
          <Col>
            <img
              style={{ marginTop: "50rem" }}
              src="images/selfie.png"
              width="800"
              height="360"
              className="container mt-5 mx-auto d-block"
            />
          </Col>
        </Row>
      )}
      {Ui === "2" && (
        <Row>
          <Col>
            <SecondStep classes={classes} handleSticker={handleSticker} />
          </Col>
          <Col>
            <ThirdStep classes={classes} sticker={sticker} title={title} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default StepsComponent;
