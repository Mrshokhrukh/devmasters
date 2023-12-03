import "./wrapper.scss";
const Wrapper = ({ text, color, desc }) => {
  return (
    <div className={`card_wrap_${color}`}>
      <p>{text}</p> <span>{desc}</span>
    </div>
  );
};

export default Wrapper;
