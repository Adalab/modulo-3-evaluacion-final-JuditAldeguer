import ModalWindow from './secondary-components/ModalWindow';

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <ModalWindow title="Usuario no encontrado">
        <p>Revisa que la dirección sea correcta</p>
      </ModalWindow>
    );
  } else {
    return (
      <ModalWindow title={props.character.name}>
        <article className="card">
          <img src={props.character.image} alt="personaje" />
          <ul>
            <li>
              <strong>Status:</strong>
              {props.character.alive}
            </li>
            <li>
              <strong>Species:</strong>
              {props.character.species}
            </li>
            <li>
              <strong>Origin:</strong>
              {props.character.species}
            </li>
            <li>
              <strong>Episodes:</strong>
              {props.character.alive}
            </li>
          </ul>
        </article>
      </ModalWindow>
    );
  }
};

export default CharacterDetail;
