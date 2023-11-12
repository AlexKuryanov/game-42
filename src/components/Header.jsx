import Display from "./Display.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header-wrapper">
        <h1 className="header-title">Найди пару</h1>
        <Display />
      </div>
    </header>
  );
};

export default Header;
