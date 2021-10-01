//importar las propTypes
import PropTypes from 'prop-types';

const Input = (props) => {
  //handle
  const handleChange = (ev) => {
    props.handleChange(props.inputName, ev.target.value);
  };

  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.searchWord}
        onChange={handleChange}
      />
    </>
  );
};
// DefalutProps
Input.defaultProps = {
  inputType: 'text',
  placeholder: 'Escribe aqui...',
  labelText: 'Escribe aqui: ',
};

// PropTypes
Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
