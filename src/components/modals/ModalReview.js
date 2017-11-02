import React from 'react';
import PropTypes from 'prop-types';
import ModalBase from '../ModalBase';
import './ModalReview.css';
import { connect } from 'react-redux';

class ModalReview extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    //If there was an active user we could add a review to the mock db here (in a thunk)
    this.props.close();
  }

  render() {
    const { close, name: productName } = this.props;
    return (
      <ModalBase className="modal__inner__review" close={close}>
        <form onSubmit={this.onSubmit}>
          <p>Please rate the <span>{productName}</span>:</p>
          <div className="modal__review__rating">
            <input type="radio" name="group-1" id="group-1-0" value="5" />
            <label htmlFor="group-1-0"></label>
            <input type="radio" name="group-1" id="group-1-1" value="4" />
            <label htmlFor="group-1-1"></label>
            <input type="radio" name="group-1" id="group-1-2" value="3" />
            <label htmlFor="group-1-2"></label>
            <input type="radio" name="group-1" id="group-1-3" value="2" />
            <label htmlFor="group-1-3"></label>
            <input type="radio" name="group-1" id="group-1-4"  value="1" />
            <label htmlFor="group-1-4"></label>
          </div>
          <label htmlFor="title">Review Title:</label>
          <input type="text" name="title" />
          <textarea placeholder="- Write your review here -"></textarea>
          <button>Submit Review</button>
        </form>
      </ModalBase> 
    )    
  }
}

ModalBase.defaultProps = {
  close: () => {}
}

ModalBase.propTypes = {
  close: PropTypes.func,
}

const mapStateToProps = state => ({
  name: state.productPage.product.name
})

export default connect(mapStateToProps)(ModalReview);