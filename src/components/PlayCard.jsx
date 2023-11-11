import { useState } from "react";

const PlayCard = ({ index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(true);
  };
  return (
    <li
      className={`cards-item ${isFlipped ? "flip" : null}`}
      data-index={index}
      onClick={handleClick}
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
