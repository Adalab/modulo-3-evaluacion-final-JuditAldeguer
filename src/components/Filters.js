import Input from './secondary-components/Input';
import InputOptions from './secondary-components/InputOptions';
import '../styles/components/filters.scss';

const Filters = (props) => {
  return (
    <form className="form" action="/" onSubmit={(ev) => ev.preventDefault()}>
      <h1 className="form--h1">Wellcome!!</h1>
      <h2 className="form--h2">Here you can find your favorites characters</h2>
      <fieldset>
        <Input
          labelText="Search name: "
          id="search-word"
          inputName="search-word"
          value={props.searchWord}
          handleChange={props.handleSearchWord}
        />
        <Input
          labelText="Search species: "
          id="search-species"
          inputName="search-species"
          value={props.searchWord} //pendiente junto a funciones--------------------
          handleChange={props.handleSearchWord}
        />
      </fieldset>
      <fieldset>
        <InputOptions
          id="get-gender"
          inputName="get-gender"
          value1="all"
          optionText1="Chose a GENDER"
          value2="Male"
          optionText2="Male"
          value3="Female"
          optionText3="Female"
          value4="unknown"
          optionText4="Unknown"
          handleChange={props.handleSearchWord}
        />
        <InputOptions
          id="get-status"
          inputName="get-status"
          value1="all"
          optionText1="Chose a STATUS"
          value2="Alive"
          optionText2="Alive"
          value3="Dead"
          optionText3="Dead"
          value4="unknown"
          optionText4="Unknown"
          handleChange={props.handleSearchWord}
        />
      </fieldset>
    </form>
  );
};

export default Filters;
