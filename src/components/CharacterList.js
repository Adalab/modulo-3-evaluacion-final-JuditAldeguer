import { v4 as uuid } from 'uuid'; // al generar id={uuid()}
import '../styles/components/characterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  //render
  const renderList = () => {
    return props.data.map((character) => {
      character.id = uuid();
      return (
        <li key={uuid()}>
          <CharacterCard character={character} />
        </li>
      );
    });
  };

  return <ul className="list">{renderList()}</ul>;
};

export default CharacterList;
