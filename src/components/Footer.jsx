const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer-wrapper">
        <div className="copyright">
          <span className="copyright-span">©</span>
          <span className="copyright-span">2023</span>
        </div>
        <div className="members">
        <a
          className="footer-link github"
          href="https://github.com/mromrrom"
          target="_blank"
          rel="noreferrer"
        >
          mromrrom
        </a>
        <a
          className="footer-link github"
          href="https://github.com/DaniilAliev"
          target="_blank"
          rel="noreferrer"
        >
          DaniilAliev
        </a>
        <a
          className="footer-link github"
          href="https://github.com/AlexKuryanov/AlexKuryanov"
          target="_blank"
          rel="noreferrer"
        >
          AlexKuryanov
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
