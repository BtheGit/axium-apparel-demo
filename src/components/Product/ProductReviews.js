import React from 'react';
import PropTypes from 'prop-types';
import './ProductReviews.css';
import ProductReview from './ProductReview';

const ProductReviews = ({reviews, showModal}) => {
  const renderReviews = reviews => {
    return reviews.map((review, idx) => (
      <ProductReview key={idx} review={review} />
    ))
  }
  return (
    <section className="product__reviews">
      <div className="product__reviews__inner">
        <header className="product__reviews__header">
          <h1>Reviews</h1>
          <button onClick={showModal}>Write a review on this product</button>
        </header>
        {renderReviews(reviews)}
      </div>
    </section>
  )
}

ProductReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.func.isRequired
}

export default ProductReviews;