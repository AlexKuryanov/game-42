import { useAuthContext, useStateContext } from "../../../context";

const WinModal = () => {
  const { stepsNumber, setStepsNumber, setModalActive, generateRandomArray } =
    useStateContext();
  const { logOut } = useAuthContext();

  const handleRestartButton = () => {
    setStepsNumber(0);
    setModalActive(null);
    generateRandomArray();
  };

  return (
    <div>
      <h1>{`Congrats! You won with ${stepsNumber} steps`}</h1>
      <p>Хочешь сыграть снова?</p>
      <div>
        <button className="btn btn-restart" onClick={handleRestartButton}>
          Да, начать заново
        </button>
        <button className="btn btn-cancel" onClick={() => setModalActive(null)}>
        Отменить
        </button>
        <button className="btn btn-exit" onClick={() => logOut()}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default WinModal;
