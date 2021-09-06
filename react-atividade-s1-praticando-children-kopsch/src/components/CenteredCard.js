import "./styles.css";

const CenteredCard = (prop) => {
  return (
    <div className="card">
      <span className="card__child">{prop.children}</span>
    </div>
  );
};

export default CenteredCard;
