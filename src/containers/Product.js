import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import * as modalActions from '../actions/modalActions';
import * as productPageActions from '../actions/productPageActions';
import './Product.css';
import ProductOverview from '../components/Product/ProductOverview';
import ProductDetail from '../components/Product/ProductDetail';
import ProductReviews from '../components/Product/ProductReviews';
import ProductError from '../components/Product/ProductError';
import Loading from '../components/Loading';


class Product extends React.Component  {
  constructor(props) {
    super(props);
    const {
      match = 1, 
      lookupProductById, 
    } = this.props;
    lookupProductById(match.params.id);
  }

  showReviewModal = () => {
    this.props.showModal('REVIEW')
  }

  handleKeydown = e => {
    if(e.keyCode === 27) this.props.hideModal();
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeydown, false);
  }

  renderProduct(isPending, product, err) {
    if(isPending) {
      return <Loading />
    }
    else if (product) {
      return [
        <ProductOverview 
          key="ov"
          name={product.name}
          category={product.category}
          subCategory={product.subCategory}
          features={product.features}
          image={product.primaryImage}
        />,
        <ProductDetail 
          key="de"
          image={product.detailImage}
          description={product.description}
        />,
        <ProductReviews 
          key="re"
          reviews={product.reviews}
          showModal={this.showReviewModal}
        />
      ]
    }
    else {
      return <ProductError err={err} />
    }
  }

  render() {
    const {
      isPending,
      product,
      err
    } = this.props;

    return (
      <main className="product__outer">
        <Helmet>
          <title>{`Product - ${product && product.name}`}</title>
        </Helmet>
        {this.renderProduct(isPending, product, err)}
      </main>
    )
  }
}

Product.propTypes = {
  match: PropTypes.object,
  lookupProductById: PropTypes.func.isRequired, 
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  product: PropTypes.object,
  err: PropTypes.string,
  isPending: PropTypes.bool.isRequired  
}

const mapStateToProps = state => {
  return {
    product: state.productPage.product,
    err: state.productPage.err,
    isPending: state.productPage.isPending
  }
}

const mapDispatchToProps =  {
  ...modalActions,
  ...productPageActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);