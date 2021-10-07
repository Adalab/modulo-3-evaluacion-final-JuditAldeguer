import Input from './secondary-components/Input';
import InputOptions from './secondary-components/InputOptions';
import '../styles/components/filters.scss';

const Filters = (props) => {
  return (
    <form className="form" action="/" onSubmit={(ev) => ev.preventDefault()}>
      <h1 className="form--h1 z_index">
        Filter and quickly locate your favorite characters
      </h1>
      <Input
        labelText="Search name: "
        id="search-word"
        inputName="search-word"
        value={props.searchWord}
        handleChange={props.handleSearch}
      />
      <Input
        labelText="Search species: "
        id="search-species"
        inputName="search-species"
        value={props.searchSpecies}
        handleChange={props.handleSearch}
      />
      <InputOptions
        id="get-gender"
        inputName="get-gender"
        searchOption={props.searchGender}
        value1="all"
        optionText1="Chose a GENDER"
        value2="Male"
        optionText2="Male"
        value3="Female"
        optionText3="Female"
        value4="unknown"
        optionText4="Unknown"
        handleChange={props.handleSearch}
      />
      <InputOptions
        id="get-status"
        inputName="get-status"
        searchOption={props.searchStatus}
        value1="all"
        optionText1="Chose a STATUS"
        value2="Alive"
        optionText2="Alive"
        value3="Dead"
        optionText3="Dead"
        value4="unknown"
        optionText4="Unknown"
        handleChange={props.handleSearch}
      />
    </form>
  );
};

export default Filters;
