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
          style={{ color: "#0085FF", padding: "1rem", borderRadius: "25px" }}
          placeholder="Step one: Give it a name"
          type="text"
          onChange={(ev) => getTitle(ev.target.value)}
        />
      </div>
      <div className="mt-3">
        <Button
          onClick={handleUi}
          value="2"
          style={{ borderRadius: "45px", padding: "0.7rem 3rem 0.7rem 3rem" }}
        >
          Insert a name
        </Button>
      </div>
    </section>
  );
};

export default FirstStep;
