import { useEffect, useState } from 'react';
import date from '../services/date';
import '../styles/layout/footer.scss';

const Footer = (props) => {
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="footer">
      <section>
        Made with ❤️ by{' '}
        <a
          className="footer--link"
          href="https://github.com/JuditAldeguer"
          rel="noreferrer"
          target="_blank"
        >
          Judit Aldeguer
        </a>{' '}
        &copy; using{' '}
        <a
          className="footer--link"
          href="https://es.reactjs.org/"
          rel="noreferrer"
          target="_blank"
        >
          React
        </a>
      </section>
      <section className="section_clock">
        <form className="form_footer">
          <input
            type="text"
            name="clock"
            className="clock"
            size="7"
            disabled
            value={date.getCurrentDate()}
          />
          <span className="clock">{date.getCurrentTime()}</span>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
