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
import { addToCart } from '../../../redux/cartRedux';

import styles from './ProductPage.module.scss';

const Component = ({ className, product, addToCart }) => {
  const [value, setvalue] = React.useState(1);
  const onChange = ({ target }) => {
    setvalue(parseInt(target.value));
  };
  const {
    description, image, title, price, id,
  } = product;

  return (
    <div className={clsx(className, styles.root)}>
      <Card className={styles.card}>
        <div>
          <img src={product.image} alt='' className={styles.image} />
        </div>
        <CardActionArea>
          <CardContent className={styles.content}>
            <div className={styles.title}>
              {product.title}
            </div>
            <div className={styles.text}>
              {product.description}
            </div>
            <input type="number" min="1" max="10" value={value} onChange={onChange} />
            <div className={styles.price}>
              $
              {product.price}
            </div>
          </CardContent>
          <CardActions className={styles.buttonWrap}>
            <Button
              className={styles.button}
              color="primary"
              variant="contained"
              onClick={() => addToCart({
                id, title, price, image, value,
              })}
            >
              Add to cart
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  addToCart: PropTypes.func,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
  }),
};

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: ({
    id, title, price, image, value,
  }) => dispatch(addToCart({
    id, title, price, image, value,
  })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};