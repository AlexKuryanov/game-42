/* eslint-disable react/prop-types */

const PlayCard = ({ index, isFlipped, handleClick, isFieldLock }) => {
  return (
    <li
      className={`cards-item ${isFlipped ? "flip" : ""}`}
      data-index={index}
      onClick={isFieldLock ? null : handleClick}
    >
      <div className="front">
        {/* <use xlinkHref="{images/svg/sprite.svg#arctic-bear}"></use> */}
        <h1>{index}</h1>
      </div>
      <div className="back"></div>
    </li>
  );
};

export default PlayCard;
