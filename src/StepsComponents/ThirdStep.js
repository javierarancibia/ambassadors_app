import { useWebcamCapture } from "../useWebcamCapture";
import FourthStep from "./FourthStep";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ThirdStep = ({ classes, sticker, title }) => {
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  const dispatch = useDispatch();

  return (
    <div>
      <header style={{ color: "white" }} className={classes.Header}>
        <h1
          style={{ fontSize: "2rem", fontWeight: "normal", marginTop: "3rem" }}
          className="text-center"
        >
          Sla<span style={{ color: "red" }}>p</span> Yourself!
        </h1>
      </header>
      <section
        className={classes.Main}
        style={{ borderRadius: "45px", paddingTop: "2rem" }}
      >
        <video
          ref={handleVideoRef}
          style={{ borderRadius: "45px", paddingTop: "5rem" }}
          data-aos="fade-left"
          data-aos-duration="4000"
        />
        <canvas
          ref={handleCanvasRef}
          // width={2}
          // height={2}
          onClick={handleCapture}
          data-aos="fade-left"
          data-aos-duration="4000"
        />
        <div className="mt-5">
          <FourthStep picture={picture} classes={classes} />
        </div>
      </section>
    </div>
  );
};

export default ThirdStep;
