//Proptypes
import PropTypes from 'prop-types';
//styles
import '../styles/components/navPage.scss';

const NavPage = (props) => {
  const handleChange = (ev) => {
    ev.currentTarget.value > props.numberOfPages
      ? props.handlePageInput(props.numberOfPages)
      : props.handlePageInput(parseInt(ev.currentTarget.value));
  };

  return (
    <nav>
      <button
        className={props.pageNum === 1 ? 'hidden' : 'nav__button'}
        onClick={props.handlePrevPage}
      >
        <i className="fas fa-angle-left"></i> Previous
      </button>
      <p className="nav__p">
        Page
        <input
          onChange={handleChange}
          className="nav__p--input"
          type="number"
          max={props.numberOfPages}
          min="1"
          name="inputPage"
          id="inputPage"
          placeholder="Ej. 2"
          value={props.pageNum}
        />
        of {props.numberOfPages}
      </p>

      <button
        className={
          props.pageNum === props.numberOfPages ? 'hidden' : 'nav__button'
        }
        onClick={props.handleNextPage}
      >
        Next <i className="fas fa-angle-right"></i>
      </button>
    </nav>
  );
};

// PropTypes
NavPage.propTypes = {
  pageNum: PropTypes.number,
};

NavPage.defaultProps = {
  pageNum: 1,
};

export default NavPage;
