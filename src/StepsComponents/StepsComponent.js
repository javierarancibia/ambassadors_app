import { useState } from "react";
import Header from "../Header";
import FirstStep from "./FirstStep";
import SecondStepComponent from "./SecondStepComponent";

import Instructions from "../Instructions";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const StepsComponent = ({ classes, getUi }) => {
  const [sticker, setSticker] = useState();
  const [title, setTitle] = useState("SLAPPE!");
  const [Ui, setUi] = useState("1");

  const obtainUi = (currentUi) => {
    setUi(currentUi);
    getUi(currentUi);
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
    <Container
      style={{
        backgroundColor: "#191D21",
        height: "auto !important",
        minHeight: "100%",
        paddingBottom: "5rem",
        borderRadius: "45px",
      }}
    >
      {Ui === "1" && (
        <div>
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
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: "#191D21",
              marginTop: "10rem",
              borderRadius: "45px 45px 0px 0px",
              paddingBottom: "18rem",
              borderColor: "white",
              borderWidth: "20px",
            }}
          >
            <Instructions />
          </div>
        </div>
      )}
      {Ui === "2" && (
        <SecondStepComponent
          classes={classes}
          handleSticker={handleSticker}
          sticker={sticker}
          title={title}
        />
      )}
    </Container>
  );
};

export default StepsComponent;
