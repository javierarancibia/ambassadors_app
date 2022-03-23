import { useState } from "react";
import { useWebcamCapture } from "./useWebcamCapture";
import logo from "./slap.png";

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

  const stickers = [logo].map((url) => {
    const img = document.createElement("img");
    img.src = url;
    return { img, url };
  });

  return (
    <main>
      <section className={classes.Gallery}>
        Step one: Give it a name
        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </section>
      <section className={classes.Stickers}>
        Step 2: select your sticker...
        <button onClick={() => setSticker(stickers[0])}>
          <img src={stickers[0].url} />
        </button>
      </section>
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
      <section className={classes.Gallery}>
        Step 4: Cherish this moment forever
        {picture && (
          <div className={classes.Picture}>
            <img src={picture.dataUri} />
            <h3>{picture.title}</h3>
          </div>
        )}
      </section>
    </main>
  );
};

export default StepsComponent;
