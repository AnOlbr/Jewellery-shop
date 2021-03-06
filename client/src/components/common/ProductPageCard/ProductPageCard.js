import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { addToCart } from '../../../redux/cartRedux';

import styles from './ProductPageCard.module.scss';

const Component = ({
  className, description, image, title, price, _id, addToCart,
}) => {
  const [value, setValue] = React.useState(1);
  const onChange = ({ target }) => {
    setValue(parseInt(target.value));
  };

  const handleCart = ({
    _id, title, price, image, value,
  }) => {
    addToCart({
      _id, title, price, image, value,
    });
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Card className={styles.card}>
        <div>
          <img src={image} alt="" className={styles.image} />
        </div>
        <CardContent className={styles.content}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.text}>
            {description}
          </div>
          <input type="number" min="1" max="10" value={value} onChange={onChange} />
          <div className={styles.price}>
            $
            {price}
          </div>
        </CardContent>
        <CardContent className={styles.buttonWrap}>
          <Button
            className={styles.button}
            color="primary"
            variant="contained"
            onClick={() => handleCart({
              _id, title, price, image, value,
            })}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
Component.propTypes = {
  className: PropTypes.string,
  addToCart: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  _id: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  addToCart: ({
    _id, title, price, image, value,
  }) => dispatch(addToCart({
    _id, title, price, image, value,
  })),
});

const Container = connect(null, mapDispatchToProps)(Component);
export {
  Container as ProductPageCard,
  Component as ProductPageCardComponent,
};