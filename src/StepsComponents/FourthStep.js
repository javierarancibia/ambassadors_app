import React from "react";

const FourthStep = ({ classes, picture }) => {
  return (
    <section className={classes.Gallery}>
      Step 4: Cherish this moment forever
      {picture && (
        <div className={classes.Picture}>
          <img src={picture.dataUri} />
          <h3 style={{ color: "white" }}>{picture.title}</h3>
        </div>
      )}
    </section>
  );
};
export default FourthStep;
