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
      <h1>Поздравляем</h1>
      <div className="text-container">
        <p>{`Количество шагов: ${stepsNumber}`}</p>
        <p>Сыграть еще раз?</p>
      </div>
      <div className="buttons">
        <button className="btn btn-restart" onClick={handleRestartButton}>
          Да, начать заново
        </button>
        <button className="btn btn-cancel" onClick={() => logOut()}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default WinModal;
