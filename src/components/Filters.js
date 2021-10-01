import Input from './secondary-components/Input';

const Filters = (props) => {
  return (
    <form action="/" onSubmit={(ev) => ev.preventDefault()}>
      <Input
        labelText="Buscador: "
        id="search-word"
        inputName="search-word"
        value={props.searchWord}
        handleChange={props.handleSearchWord}
      />
    </form>
  );
};

export default Filters;
