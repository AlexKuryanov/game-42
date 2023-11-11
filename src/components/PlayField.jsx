import { useEffect, useState } from "react";
import PlayCard from "./PlayCard.jsx";
import _ from "lodash";

const PlayField = () => {
  const [randomArr, setRandomArr] = useState([]);

  useEffect(() => {
    const generatedRandomArr = _.sampleSize(
      [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
      16
    );
    setRandomArr(generatedRandomArr);
  }, []);
  console.log(randomArr);
  return (
    <ul className="cards-list">
      {randomArr.map((item) => (
        <PlayCard index={item} key={item} />
      ))}
    </ul>
  );
};

export default PlayField;
