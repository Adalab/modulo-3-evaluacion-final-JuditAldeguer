import ModalWindow from './ModalWindow';
import '../../styles/components/notFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not_found_page">
      <ModalWindow title="ERROR: La pagina que buscas no existe">
        <p>
          Revisa que la dirección de la página
          <span className="cursiva"> (url)</span> sea correcta.
        </p>
      </ModalWindow>
    </div>
  );
};
export default NotFoundPage;
