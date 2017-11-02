import React from 'react';
import PropTypes from 'prop-types';
import './ModalBase.css';

const ModalBase = ({className, children, close}) => {
  return(
    <aside 
      className={className ? className + " modal" : "modal"} 
      onClick={e => e.stopPropagation()}
    >
      <div className="modal__close" onClick={close}>×</div>
      {children}
    </aside>
  )
}

ModalBase.defaultProps = {
  close: () => {}
}

ModalBase.propTypes = {
  className: PropTypes.string,
  close: PropTypes.func,
  children: PropTypes.any
}

export default ModalBase;