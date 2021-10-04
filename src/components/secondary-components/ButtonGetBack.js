import '../../styles/components/buttonGetBack.scss';

const ButtonGetBack = (props) => {
  const handleBackBtn = (ev) => {
    ev.preventDefault();
    window.history.back();
  };
  return (
    <button className="button_back" title="atrás" onClick={handleBackBtn}>
      Volver atrás
    </button>
  );
};

export default ButtonGetBack;
