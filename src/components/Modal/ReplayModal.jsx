import { useStateContext } from "../../../context";

const ReplayModal = () => {
	const { 
		setStepsNumber, 
		setModalActive, 
		generateRandomArray, 
		setSelectedCards,
    setMatchedCards 
	} = useStateContext();

	const handleRestartButton = () => {
		setSelectedCards([])
		setStepsNumber(0);
		setModalActive(null);
		setMatchedCards([])
		setTimeout(() => {
			generateRandomArray()
		}, 300)
	}

	return (
		<div>
			<h1>Ты уверен?</h1>
			<div className="buttons">
				<button className='btn btn-restart' onClick={handleRestartButton}>Да, начать заново</button>
				<button className='btn btn-cancel' onClick={() => setModalActive(null)}>Отменить</button>
			</div>
		</div>
	)
};

export default ReplayModal;