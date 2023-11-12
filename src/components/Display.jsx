import { useAuthContext } from "../../context";
import { useStateContext } from "../../context";

const Display = () => {
  const { user } = useAuthContext();
  const { stepsNumber, setModalActive } = useStateContext();

  return (
    <div className="score">
      Игрок:<span className="user">{user}</span>
      Шаги:<span className="steps">{stepsNumber}</span>
      <button
        className="btn btn-replay"
        onClick={() => setModalActive("replay")}
      >
        Сыграть снова
      </button>
    </div>
  );
};

export default Display;
