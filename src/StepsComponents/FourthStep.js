import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FourthStep = ({ classes, picture }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  return (
    <div>
      <h2>Step 4: Cherish this moment forever</h2>
      <section className={classes.Gallery}>
        {picture && (
          <div className={classes.Picture}>
            <img src={picture.dataUri} />
            <h3 style={{ color: "black" }}>{picture.title}</h3>
          </div>
        )}
      </section>
    </div>
  );
};
export default FourthStep;
