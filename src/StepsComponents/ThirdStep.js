import { useWebcamCapture } from "../useWebcamCapture";
import FourthStep from "./FourthStep";

const ThirdStep = ({ classes, sticker, title }) => {
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div>
      <h2 style={{ color: "white" }}>Step three: Slap your self!</h2>
      <section className={classes.Main}>
        <video ref={handleVideoRef} />
        <canvas
          ref={handleCanvasRef}
          width={2}
          height={2}
          onClick={handleCapture}
        />
        <FourthStep picture={picture} classes={classes} />
      </section>
    </div>
  );
};

export default ThirdStep;
