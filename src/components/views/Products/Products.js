import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { ProductCard } from '../../common/ProductCard/ProductCard';

import { getAll } from '../../../redux/productRedux';

import styles from './Products.module.scss';

const Component = ({ className, products }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      {products.map((product) => (<ProductCard key={product.id} {...product} />))}
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};