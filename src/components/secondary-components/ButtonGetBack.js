const ButtonGetBack = (props) => {
  const handleBackBtn = (ev) => {
    ev.preventDefault();
    window.history.back();
  };
  return (
    <button title="atrás" onClick={handleBackBtn}>
      Volver atrás
    </button>
  );
};

export default ButtonGetBack;
