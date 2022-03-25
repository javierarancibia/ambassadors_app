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
      <header style={{ color: "white" }} className={classes.Header}>
        <h1
          style={{ fontSize: "2rem", fontWeight: "normal", marginTop: "3rem" }}
          className="text-center"
        >
          <span style={{ color: "red" }}>C</span>herish this moment
          <span style={{ color: "red" }}> F</span>
          orever
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
              style={{
                color: "white",
                fontFamily: "Raleway",
                fontSize: "3rem",
              }}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="once"
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
