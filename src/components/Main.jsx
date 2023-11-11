import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PlayField from "./PlayField.jsx";
import "./style.css";

function MainPage() {
  return (
    <body className="page">
      <Header />
      <PlayField />
      <Footer />
    </body>
  );
}

export default MainPage;
