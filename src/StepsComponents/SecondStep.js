import logo from "../images/slap.png";

const SecondStep = ({ classes, handleSticker }) => {
  const stickers = [logo].map((url) => {
    const img = document.createElement("img");
    img.src = url;
    return { img, url };
  });

  return (
    <section className={classes.Stickers}>
      Step 2: select your sticker...
      <button onClick={() => handleSticker(stickers[0])}>
        <img src={stickers[0].url} />
      </button>
    </section>
  );
};

export default SecondStep;
