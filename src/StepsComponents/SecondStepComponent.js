import React, { useState, useEffect } from "react";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "./images/slap.gif";

const SecondStepComponent = ({ classes, handleSticker, sticker, title }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);

  return (
    <div>
      {display ? (
        <Row>
          <Col>
            <SecondStep classes={classes} handleSticker={handleSticker} />
          </Col>
          <Col
            style={{ backgroundColor: "#191D21", borderRadius: "45px" }}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <ThirdStep classes={classes} sticker={sticker} title={title} />
          </Col>
        </Row>
      ) : (
        <Container
          fluid
          style={{
            backgroundColor: "#191D21",
            height: "auto !important",
            minHeight: "100%",
            paddingBottom: "48rem",
            borderRadius: "45px",
          }}
        >
          <Row>
            <Col className="text-center mt-5 text-white">
              <img
                src={Spinner}
                width="400"
                style={{ marginRight: "3rem" }}
                alt="Spinner"
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SecondStepComponent;
