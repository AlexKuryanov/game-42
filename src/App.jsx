import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PlayField from "./components/PlayField.jsx";
import "./style.css";

function App() {
  return (
    <body className="page">
      <Header />
      <PlayField />
      <Footer />
    </body>
  );
}

export default App;
