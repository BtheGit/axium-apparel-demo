import {
  SHOW_MODAL,
  HIDE_MODAL
} from './modalTypes';

export function showModal(modalType) {
  return {
    type: SHOW_MODAL,
    payload: modalType
  }
};

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
};
