import {
  LOAD_PRODUCT,
  LOAD_ERROR,
  PENDING,
  RESOLVED
} from '../actions/productPageTypes';

const initialState = {
  product: null,
  err: null,
  isPending: false
};

const productPage = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload,
        err: null
      };
    case LOAD_ERROR:
      return {
        ...state,
        product: null,
        err: action.payload
      }
    case PENDING:
      return {
        product: null,
        err: null,
        isPending: true
      };
    case RESOLVED:
      return {
        ...state,
        isPending: false
      };
    default:
      return state;
  }
};

export default productPage;