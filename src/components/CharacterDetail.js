import ModalWindow from './secondary-components/ModalWindow';

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <ModalWindow title="Usuario no encontrado">
        <p>Búscate la vida</p>
      </ModalWindow>
    );
  } else {
    return (
      <ModalWindow title={props.character.name}>
        <article className="card">
          <img src={props.character.image} alt="personaje" />
          <h2>
            <strong>{props.character.name}</strong>
          </h2>
          <p>{props.character.species}</p>
        </article>
      </ModalWindow>
    );
  }
};

export default CharacterDetail;
