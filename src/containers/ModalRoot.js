import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MODALS from '../components/modals/';
import * as actions from '../actions/modalActions';
import './ModalRoot.css';

const ModalRoot = ({activeModal, hideModal}) => {
  
  const ActiveModal = MODALS[activeModal];
  
  const renderModal = () => {
    if(!activeModal) {
      return null;
    }
    return (
      <ActiveModal 
        close={hideModal}
      />
    )
  }

  return (
    <div className={`modal-background ${activeModal ? 'active' : ''}`} >
      {renderModal()}
    </div>
  )
}

ModalRoot.propTypes = {
  activeModal: PropTypes.string,
  closeModal: PropTypes.func
}

export default connect(state => state.modals, actions)(ModalRoot);