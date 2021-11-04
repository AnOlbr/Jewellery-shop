import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { ProductCard } from '../../common/ProductCard/ProductCard';
import { getAll, fetchProducts } from '../../../redux/productRedux';

import styles from './Products.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { className, products } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          {products.map((product) => (<ProductCard key={product.id} {...product} />))}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};