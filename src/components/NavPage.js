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
      <p className="pages_nav_bar_index">
        Page
        <input
          onChange={handleChange}
          className="input_page_number"
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
          props.pageNum === props.numberOfPages
            ? 'hidden'
            : 'pages_nav_bar_button'
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
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default NavPage;
