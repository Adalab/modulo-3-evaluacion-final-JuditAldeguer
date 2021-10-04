import { useState } from 'react';
import '../../styles/components/modal_window.scss';
import ButtonGetBack from './ButtonGetBack';

const ModalWindow = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <ButtonGetBack className="button_back" />
          <header className="modal__header">
            <h2 className="modal__title">{props.title}</h2>
          </header>
          <section>{props.children}</section>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
