import CharacterCard from './CharacterCard';
import { v4 as uuid } from 'uuid'; // al generar id={uuid()}

const CharacterList = (props) => {
  //render
  const renderList = () => {
    return props.data.map((character) => {
      return (
        <li key={uuid()}>
          <CharacterCard character={character} />
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default CharacterList;
