import '../styles/layout/footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      Copyright&copy; Made with ❤️ by Judit Aldeguer using{' '}
      <a
        className="footer--link"
        href="https://es.reactjs.org/"
        rel="noreferrer"
        target="_blank"
      >
        React
      </a>
    </footer>
  );
};

export default Footer;
