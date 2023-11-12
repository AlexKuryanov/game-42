/* eslint-disable react/prop-types */

const PlayCard = ({ index, isFlipped, handleClick, isFieldLock }) => {
  return (
    <li
      className={`cards-item ${isFlipped ? "flip" : ""}`}
      data-index={index}
      onClick={isFieldLock ? null : handleClick}
    >
      <div className="front">
        <img src={`${index}.png`} alt={index} />
      </div>
      <div className="back"></div>
    </li>
  );
};

export default PlayCard;
