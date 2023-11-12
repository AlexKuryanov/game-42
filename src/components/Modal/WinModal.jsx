import { useAuthContext, useStateContext } from "../../../context";

const WinModal = () => {
  const { stepsNumber, setStepsNumber, setModalActive, generateRandomArray } = useStateContext();
  const {logOut} = useAuthContext();

	const handleRestartButton = () => {
		setStepsNumber(0);
		setModalActive(null);
		generateRandomArray();
	}

  return (
    <div>
      <h1>{`Congrats! You won with ${stepsNumber} steps`}</h1>
      <p>Do you want to play again?</p>
      <div>
        <button onClick={handleRestartButton}>Yes, restart the game</button>
        <button onClick={() => setModalActive(null)}>Cancel</button>
        <button onClick={() => logOut()}>Exit</button>
      </div>
    </div>
  )
}

export default WinModal;