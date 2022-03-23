import { useState } from "react";
import { useWebcamCapture } from "../useWebcamCapture";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const StepsComponent = ({ classes }) => {
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");
  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  const handleTitle = (title) => {
    setTitle(title);
  };

  const handleSticker = (sticker) => {
    setSticker(sticker);
  };

  return (
    <main>
      <FirstStep classes={classes} handleTitle={handleTitle} />
      <SecondStep classes={classes} handleSticker={handleSticker} />
      <section className={classes.Main}>
        Step three: Slap your self!
        <video ref={handleVideoRef} />
        <canvas
          ref={handleCanvasRef}
          width={2}
          height={2}
          onClick={handleCapture}
        />
      </section>
      <FourthStep picture={picture} classes={classes} />
    </main>
  );
};

export default StepsComponent;
