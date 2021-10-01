import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  //hacer map para que se muestre cada caracter
  return (
    <ul>
      Listado
      <li>
        <CharacterCard />
      </li>
    </ul>
  );
};

export default CharacterList;
