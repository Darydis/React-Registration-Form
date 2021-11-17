import "./Button.scss";

const Button = ({ handle, name, error }) => {
  console.log('error?', {error});
  return (
    <div className="button">
      <button
        className={`${error&&error!==null ? "disabled" : "active"}
        `}
        onClick={handle}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
