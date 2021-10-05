import { useEffect, useState } from 'react';
import date from '../services/date';
import '../styles/layout/footer.scss';

const Footer = (props) => {
  const [actualiseTime, setActualiseTime] = useState('');
  const [second, setSecond] = useState('');

  const getActualSeconds = () => {
    const actualMoment = new Date();
    const seconds = actualMoment.getSeconds();
    setSecond(seconds);
  };

  useEffect(() => {
    getActualSeconds();
    setActualiseTime(date.getCurrentTime());
  }, [second]);

  return (
    <footer className="footer">
      <section className="section_clock">
        <strong>Time: </strong>
        {`${date.getCurrentDate()} `}
        <form className="form_footer">
          <input
            type="text"
            name="clock"
            className="clock"
            size="7"
            disabled
            value={actualiseTime}
          />
        </form>
      </section>
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
    </footer>
  );
};

export default Footer;
