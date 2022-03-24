import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FourthStep = ({ classes, picture }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  return (
    <section className={classes.Gallery}>
      Step 4: Cherish this moment forever
      {picture && (
        <div className={classes.Picture}>
          <img src={picture.dataUri} />
          <h3 style={{ color: "black" }}>{picture.title}</h3>
        </div>
      )}
    </section>
  );
};
export default FourthStep;
