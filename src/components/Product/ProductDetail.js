import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.css';

const ProductDetail = ({image, description}) => {
  const parseText = (text) => {
    const paragraphs = text.split('\n');
    return paragraphs.map((text, idx) => <p key={idx}>{text}</p>)
  }

  return (
    <section className="product__detail">
      <article className="product__detail__inner">
        <figure>
          <img src={image} alt="Carousel slide" />
        </figure>
        <section className="product__detail__body">
          {parseText(description)}
        </section>
      </article>
    </section>
  )
};

ProductDetail.propTypes = {
  image: PropTypes.node,
  description: PropTypes.string
};

export default ProductDetail;