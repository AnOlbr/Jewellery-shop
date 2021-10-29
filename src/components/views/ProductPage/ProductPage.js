import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { getProductById } from '../../../redux/productRedux';

import styles from './ProductPage.module.scss';

const Component = ({ className, product }) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.card}>
      <div>
        <img src={product.image} className={styles.image} />
      </div>
      <CardActionArea>
        <CardContent className={styles.content}>
          <div className={styles.title}>
            {product.title}
          </div>
          <div className={styles.text}>
            {product.description}
          </div>

          <div className={styles.price}>
            $
            {product.price}
          </div>
        </CardContent>
        <CardActions className={styles.buttonWrap}>
          <Button className={styles.button} color="primary" variant="contained">Add to cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
};

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};