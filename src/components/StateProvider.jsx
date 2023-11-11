/* eslint-disable react/prop-types */
import { StateContext } from "../../context";
import { useState } from 'react';
import _ from "lodash";

const StateProvider = ({ children }) => {
  const [stepsNumber, setStepsNumber] = useState(0);

	const [modalActive, setModalActive] = useState(null);

	const [randomArr, setRandomArr] = useState([]);

	const [selectedCards, setSelectedCards] = useState([]);

	const generateRandomArray = () => {
		const generatedRandomArr = _.sampleSize(
      [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
      16
    );
    setRandomArr(generatedRandomArr);
	}
	const props = {
		stepsNumber, 
		setStepsNumber,
		modalActive, 
		setModalActive, 
		randomArr, 
		generateRandomArray,
		selectedCards, 
		setSelectedCards,
	}

  return (
    <StateContext.Provider value={props}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;