import { useAuthContext } from "../../context";
import { useStateContext } from "../../context";

const Display = () => {
  const { user } = useAuthContext();
  const { stepsNumber, setModalActive } = useStateContext();
  const { logOut } = useAuthContext();

  return (
    <div className="info-container">
      <div className="score">
        Игрок: <span className="user">{user}</span> <br />
        Шаги: <span className="steps">{stepsNumber}</span>
      </div>
      <button
        className="btn btn-replay"
        onClick={() => setModalActive("replay")}
      >
        Сыграть снова
      </button>
      <button className="btn btn-exit" onClick={logOut}>Выйти</button>
    </div>
    );
};

export default Display;
