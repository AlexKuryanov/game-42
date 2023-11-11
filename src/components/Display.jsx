import { useAuthContext } from "../../context";
import { useStateContext}  from "../../context";

const Display = () => {
  const { user } = useAuthContext();
  const { stepsNumber, setModalActive } = useStateContext()

  return (
    <div className="score">
      User:<span className="user">{user}</span>
      Steps:<span className="steps">{stepsNumber}</span>
      <button onClick={() => setModalActive('replay')}>Replay</button>
    </div>
  );
};

export default Display;
