import { useStateContext } from "../../../context";
import ReplayModal from "./ReplayModal";
import WinModal from "./WinModal";
import './modal.css';

const getModal = (modalState) => {
  const mapping = {
    win: <WinModal />,
    replay: <ReplayModal />,
  };

  return mapping[modalState];
}

const Modal = () => {
  const { modalActive, setModalActive } = useStateContext()

  return(
    <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
      <div className={modalActive ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>{
        getModal(modalActive)
      }</div>
    </div>
  )
}

export default Modal;