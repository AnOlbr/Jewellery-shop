import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { OrderCard } from '../../common/OrderCard/OrderCard';
import { getCart, getTotal, sendOrderRequest } from '../../../redux/cartRedux';

import styles from './Order.module.scss';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        firstName: '',
        lastName: '',
        address: '',
        code: '',
        country: '',
      },
    };
  }

  handleChange = (event, name) => {
    const { order } = this.state;
    this.setState({ order: { ...order, [name]: event.target.value } });
  };

  handleSubmit = async () => {
    const { order } = this.state;
    const { sendOrder, cart, total } = this.props;
    await sendOrder({ order, cart, total });
  };

  render() {
    const {
      className, cart, total,
    } = this.props;
    const { handleSubmit, handleChange } = this;
    const { order } = this.state;

    return (
      <div className={clsx(className, styles.root)}>
        <Typography variant="h6" gutterBottom className={styles.title}>
          Delivery data
        </Typography>
        <Grid
          className={styles.container}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="first name"
              fullWidth
              autoComplete="given-name"
              value={order.firstName}
              onChange={(e) => handleChange(e, 'firstName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="last name"
              fullWidth
              autoComplete="family-name"
              value={order.lastName}
              onChange={(e) => handleChange(e, 'lastName')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="address"
              fullWidth
              autoComplete="shipping address"
              value={order.address}
              onChange={(e) => handleChange(e, 'address')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="postal-code"
              name="postal-code"
              label="postal-code"
              fullWidth
              autoComplete="shipping postal-code"
              value={order.code}
              onChange={(e) => handleChange(e, 'code')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="country"
              fullWidth
              autoComplete="country"
              value={order.country}
              onChange={(e) => handleChange(e, 'country')}
            />
          </Grid>
          <div className={styles.orderCart}>
            {(cart.map((prod) => (<OrderCard key={prod.id} {...prod} />)))}
          </div>
          <Table>
            <TableBody>
              <TableRow className={styles.orderTable}>
                <TableCell className={styles.orderContent}>
                  <p>delivery fee: $10</p>
                </TableCell>
                <TableCell className={clsx(styles.orderTotal, styles.orderContent)}>
                  <p>
                    Total cost: $
                    {total + 10}
                  </p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className={styles.buttonWrapper}>
            <Button variant="contained" color="secondary" href="/">
              Go back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit(order, cart, total)}
            >
              Buy and pay
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  cart: PropTypes.array,
  sendOrder: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
  total: getTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOrder: ({ order, cart, total }) => dispatch(sendOrderRequest({ order, cart, total })),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};