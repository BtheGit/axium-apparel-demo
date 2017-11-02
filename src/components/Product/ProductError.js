import React from 'react';
import PropTypes from 'prop-types';
import './ProductError.css';

const ProductError = ({ err }) => (
  <div className="product__error">
    <div>Error: <span>{err}</span></div>
  </div>
);

ProductError.propTypes = {
  err: PropTypes.string
}

export default ProductError;