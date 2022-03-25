import React from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Instructions = () => {
  return (
    <Row className="mt-5" style={{ color: "#B0B0B0", fontFamily: "Raleway" }}>
      <Col className="text-center">
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{ fontWeight: "bold" }}
        >
          sdash
        </h3>
        <p data-aos="fade-up" data-aos-duration="2000">
          Lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor
          sit amet
        </p>
      </Col>
      <Col className="text-center">
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{ fontWeight: "bold" }}
        >
          sdash
        </h3>
        <p data-aos="fade-up" data-aos-duration="2000">
          Lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor
          sit amet
        </p>
      </Col>
      <Col className="text-center">
        {/* <img
          style={{ marginTop: "50rem" }}
          src="images/type.png"
          height="70%"
          className="container mt-5 mx-auto d-block"
        /> */}
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{ fontWeight: "bold" }}
        >
          sdash
        </h3>
        <p data-aos="fade-up" data-aos-duration="2000">
          Lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor
          sit amet
        </p>
      </Col>
    </Row>
  );
};

export default Instructions;
