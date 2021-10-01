import { useState } from 'react';
import '../../styles/components/modal_window.scss';
import ButtonGetBack from './ButtonGetBack';

const ModalWindow = (props) => {
  return (
    <section className={`modal_window`}>
      <ButtonGetBack />
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default ModalWindow;
