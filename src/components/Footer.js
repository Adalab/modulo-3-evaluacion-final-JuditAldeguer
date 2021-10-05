import date from '../services/date';
import '../styles/layout/footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <section>
        Copyright&copy; Made with ❤️ by Judit Aldeguer using{' '}
        <a
          className="footer--link"
          href="https://es.reactjs.org/"
          rel="noreferrer"
          target="_blank"
        >
          React
        </a>
      </section>
      <section>
        <strong>Current time in Spain: </strong>
        {date.getCurrentDate()}
        <form name="form_reloj">
          <input
            type="text"
            name="reloj"
            size="7"
            disabled
            value={date.getCurrentTime()}
          />
        </form>
      </section>
    </footer>
  );
};

export default Footer;
