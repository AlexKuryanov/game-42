import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PlayField from "./PlayField.jsx";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import { useAuthContext } from "../../context/index.js";
import StateProvider from "./StateProvider.jsx";
import Modal from "./Modal/Modal.jsx";

function MainPage() {
  const { user } = useAuthContext();

  const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
      navigate('/login');
    }
	}, [user, navigate])

  return (
    <>
      <StateProvider>
        <Header />
        <PlayField />
        <Footer />
        <Modal />
      </StateProvider>
    </>
  );
}

export default MainPage;
