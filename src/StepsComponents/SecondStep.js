import logo from "./images/slap.png";
import logo2 from "./images/cat.png";
import { useEffect, useState } from "react";
import axios from "axios";
import IMAGES from "../Images";

const SecondStep = ({ classes, handleSticker }) => {
  const imagesArray = [logo, logo2];
  const stickers = imagesArray.map((url) => {
    const img = document.createElement("img");
    img.src = url;
    return { img, url };
  });

  return (
    <div>
      <h2 style={{ color: "white" }}>Step 2: select your sticker...</h2>
      <section className={classes.Stickers}>
        {stickers &&
          stickers.map((item) => (
            <button onClick={() => handleSticker(item)}>
              <img src={item.url} />
            </button>
          ))}
      </section>
    </div>
  );
};

export default SecondStep;
