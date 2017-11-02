import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/modalTypes';

const initialState = {
  activeModal: null
};

const modals = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        activeModal: action.payload
      }
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modals;

