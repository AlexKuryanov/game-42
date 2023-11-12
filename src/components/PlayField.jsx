import { useEffect, useState } from "react";
import PlayCard from "./PlayCard.jsx";
import { useStateContext } from "../../context/index.js";

const PlayField = () => {
  const [matchedCards, setMatchedCards] = useState([]);

  let { 
    stepsNumber, 
    setStepsNumber, 
    setModalActive, 
    generateRandomArray, 
    randomArr,
    selectedCards,
    setSelectedCards,
  } = useStateContext();

  useEffect(() => {
    generateRandomArray();
  }, []);

  const handleCardClick = (index) => {
    if (matchedCards.includes(index) || selectedCards.includes(index)) return;

    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = newSelectedCards;
      const firstCard = randomArr[firstCardIndex];
      const secondCard = randomArr[secondCardIndex];

      if (firstCard === secondCard) {
        setStepsNumber(stepsNumber += 1);
        setMatchedCards([...matchedCards, firstCardIndex, secondCardIndex]);
        setSelectedCards([]);
        setTimeout(() => {
          setMatchedCards([]);
          setModalActive('win');
        } , 1500)
      } else {
        setStepsNumber(stepsNumber += 1);
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <ul className="cards-list">
      {randomArr.map((item, index) => (
        <PlayCard
          index={item}
          key={index}
          isFlipped={selectedCards.includes(index) || matchedCards.includes(index)}
          handleClick={() => handleCardClick(index)}
        />
      ))}
    </ul>
  );
};

export default PlayField;
