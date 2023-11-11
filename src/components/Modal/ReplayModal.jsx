import { useStateContext } from "../../../context";

const ReplayModal = () => {
	const { setStepsNumber, setModalActive, generateRandomArray, setSelectedCards } = useStateContext();

	const handleRestartButton = () => {
		setSelectedCards([])
		setStepsNumber(0);
		setModalActive(null);
		generateRandomArray();
	}

	return (
	<div>
		<h1>Are you sure?</h1>
		<div>
			<button onClick={handleRestartButton}>Yes, restart the game</button>
			<button onClick={() => setModalActive(null)}>Cancel</button>
		</div>
	</div>
	)
};

export default ReplayModal;