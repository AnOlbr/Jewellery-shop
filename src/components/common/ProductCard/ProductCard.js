import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux';
import styles from './ProductCard.module.scss';

const Component = ({
  className, title, image, price, id, addToCart,
}) => {
  const [value, setvalue] = React.useState(1);
  const onChange = ({ target }) => {
    setvalue(parseInt(target.value));
  };
  return (
    <div className={clsx(className, styles.root)}>
      <Card className={styles.card}>
        <div>
          <img src={image} alt='' className={styles.image} />
        </div>
        <div>
          <CardContent className={styles.content}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.price}>
              $ {price * value}
            </div>
            <input type="number" min="1" max="10" value={value} onChange={onChange} />
          </CardContent>
          <CardActions className={styles.actions} >
            <Button color="primary" href={`/products/${id}`} size="small">More</Button><div></div>
            <Button
              color="primary"
              size="small"
              onClick={() => addToCart({
                id, title, price, image, value,
              })}
            >
              Add to cart
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  addToCart: PropTypes.func,
};


const mapDispatchToProps = (dispatch) => ({
  addToCart: ({
    id, title, price, image, value,
  }) => dispatch(addToCart({
    id, title, price, image, value,
  })),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as ProductCard,
  Component as ProductCardComponent,
};