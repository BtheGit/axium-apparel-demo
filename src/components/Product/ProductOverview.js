import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './ProductOverview.css';

const ProductOverview = ({
  name,
  category,
  subCategory,
  features,
  image
}) => {
  const renderFeatures = features => features.map((text, idx) => {
    return <h4 key={idx}>{text}</h4>
  })

  return (
    <section className="product-overview">
      <article className="product-overview__inner">
        <figure className="product-overview__display">
          <img src={image} alt={name} />
          <figcaption>
            <NavLink to="/" className="product-overview__link--category">
              {category}
            </NavLink>
            <span>></span>
            <NavLink to="/">
              {subCategory}
            </NavLink>
          </figcaption>
        </figure>
        <section className="product-overview__select">
          <header>
            <h1>{name}</h1>
          </header>
          <div className="product-overview__features">
            {renderFeatures(features)}
          </div>
          <form className="product-overview__form" onSubmit={e => e.preventDefault()}>
            <div className="product-overview__drop-select">
              <select  name="size">
              <option>Select Size</option>
              </select>
            </div>
            <div className="product-overview__drop-select">
              <select  name="color">
                <option>Select Color</option>
              </select>
            </div>
            <div className="product-overview__drop-number">
              <label htmlFor="quantity">Quantity</label>
              <input  type="number" name="quantity" placeholder="1"/>
            </div>
            <button className="product-overview__button">Add to cart</button>
          </form>
        </section>
      </article>
    </section>
  )
};

ProductOverview.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  subCategory: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.node
}

export default ProductOverview;