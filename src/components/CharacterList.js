import '../styles/components/characterList.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  //render
  const renderList = () => {
    return props.data.map((character) => {
      // console.log({character.id});
      console.log(character.id);
      return (
        <li className="z_index" key={character.created}>
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
