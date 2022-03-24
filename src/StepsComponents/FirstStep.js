import { Button } from "react-bootstrap";

const FirstStep = ({ classes, handleTitle, onGetUi }) => {
  const handleUi = (e) => {
    e.preventDefault();
    onGetUi(e.currentTarget.value);
  };

  const getTitle = (title) => {
    handleTitle(title);
  };

  return (
    <section className={classes.Gallery}>
      <div>
        <input
          className="mb-3 mt-3 h5"
          style={{ color: "#0085FF" }}
          placeholder="Step one: Give it a name"
          type="text"
          // value={title}
          onChange={(ev) => getTitle(ev.target.value)}
        />
      </div>
      <div className="mt-3">
        <Button
          onClick={handleUi}
          value="2"
          style={{ borderRadius: "20px", padding: "1rem" }}
        >
          Insert a name
        </Button>
      </div>
    </section>
  );
};

export default FirstStep;
