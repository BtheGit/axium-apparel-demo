import React from 'react';
import PropTypes from 'prop-types';
import './ProductReview.css';
import imgIconStar from '../../images/star.png';

const ProductReview = props => {
  const {
    name,
    title,
    avatar,
    body,
    rating,
    date
  } = props.review;

  const renderStars = count => {
    const stars = [];
    for(let i = 0; i < count; i++) {
      stars.push(<span key={i}><img src={imgIconStar} alt="Rating Star" /></span>)
    }
    return stars;
  }

  return (
    <article className="product__review">
      <figure>
        <img src={avatar} alt="Reviewer avatar" />
        <figcaption>{name}</figcaption>
      </figure>
      <section className="product__review__body">
        <header>
          <h2>{title}</h2>
          <h3>{date}</h3>
          <div>{renderStars(rating)}</div>
        </header>
        <p>{body}</p>
      </section>
    </article>
  )
}

ProductReview.propTypes = {
  review: PropTypes.object
}

export default ProductReview;