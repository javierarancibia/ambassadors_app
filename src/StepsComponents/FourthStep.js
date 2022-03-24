import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const FourthStep = ({ classes, picture }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  return (
    <div>
      <header style={{ color: "black" }} className={classes.Header}>
        <h1
          style={{ fontSize: "2rem", fontWeight: "normal", marginTop: "3rem" }}
        >
          Choose-A-<span style={{ color: "red" }}>S</span>ticker
        </h1>
      </header>
      <section className={classes.Gallery}>
        {picture && (
          <div className={classes.Picture}>
            <img
              src={picture.dataUri}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <h3
              style={{ color: "black" }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {picture.title}
            </h3>
          </div>
        )}
      </section>
    </div>
  );
};
export default FourthStep;
