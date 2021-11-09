import '../styles/components/characterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  //render
  const renderList = () => {
    return props.data.map((character) => {
      return (
        <li key={character.id} className="z_index">
          <CharacterCard
            character={character}
            characterId={props.characterId}
          />
        </li>
      );
    });
  };

  return <ul className="list">{renderList()}</ul>;
};

export default CharacterList;
