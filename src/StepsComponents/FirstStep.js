const FirstStep = ({ classes, handleTitle }) => {
  const getTitle = (title) => {
    handleTitle(title);
  };

  return (
    <section className={classes.Gallery}>
      Step one: Give it a name
      <input
        type="text"
        // value={title}
        onChange={(ev) => getTitle(ev.target.value)}
      />
    </section>
  );
};

export default FirstStep;
