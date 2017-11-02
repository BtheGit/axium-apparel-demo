import db from '../db';
import {
  LOAD_PRODUCT,
  LOAD_ERROR,
  PENDING,
  RESOLVED
} from './productPageTypes';

const loadProduct = product => {
  return {
    type: LOAD_PRODUCT,
    payload: product
  }
};

const loadError = error => {
  return {
    type: LOAD_ERROR,
    payload: error
  }
}

const setStateToLoading = () => {
  return {
    type: PENDING
  }
};

const setStateToResolved = () => {
  return {
    type: RESOLVED
  }
}

//NB: This is a mock protocol to demonstrate an API call to the database for
//loading product items
export const lookupProductById = id => dispatch => {
  dispatch(setStateToLoading());

  new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        const product = db[id];
        resolve(product)
      }, 1500)
    } else {
      const err = new Error('Whoops');
      reject(err);
    }
  })
  .then(product => {
    dispatch(loadProduct(product));
    dispatch(setStateToResolved());
  })
  .catch(err => {
    dispatch(loadError(err));
    dispatch(setStateToResolved());
  })  
}
