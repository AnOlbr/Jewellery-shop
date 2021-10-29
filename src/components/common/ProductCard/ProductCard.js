import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductCard.module.scss';

const Component = ({className, title, image, price, id}) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.card}>
      <div>
        <img src={image} className={styles.image} />
      </div>
      <CardActionArea>
        <CardContent className={styles.content}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.price}>
            $ {price}
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary" href={`/products/${id}`} variant="outlined" size="small">More</Button>
          <Button color="primary" variant="outlined" size="small">Add to cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductCard,
  // Container as ProductCard,
  Component as ProductCardComponent,
};