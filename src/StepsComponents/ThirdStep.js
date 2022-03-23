import { useWebcamCapture } from "../useWebcamCapture";
import { useEffect } from "react";

const ThirdStep = ({ classes, sticker, title, handlePicture }) => {
  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  useEffect(() => {
    handlePicture(picture);
  }, [picture]);
  return (
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
  );
};

export default ThirdStep;
