import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchProducts } from '../../../redux/productRedux';
import { ProductPageCard } from '../../common/ProductPageCard/ProductPageCard';

import styles from './ProductPage.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const {
      className, products, match,
    } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        {products.filter((product) => product._id === match.params.id).map((product) => (
          <ProductPageCard key={product.id} {...product} />))}
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  addToCart: PropTypes.func,
  products: PropTypes.array,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    _id: PropTypes.string,
  }),
  fetchProducts: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};