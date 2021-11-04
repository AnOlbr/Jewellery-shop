import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { removeFromCart, updateValue, addNote } from '../../../redux/cartRedux';

import styles from './CartCard.module.scss';

const Component = ({
  _id, className, title, image, price, value, removeFromCart, updateValue, addNote,
}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.table} aria-label="cart table">
      <div className={styles.tableCell}>
        <img src={image} alt='' className={styles.image} />
      </div>
      <div className={styles.tableCell}>
        {title}
      </div>
      <div className={styles.tableCell, styles.note}>
        <textarea
          placeholder="Note for the seller"
          onChange={(e) => addNote({ _id, notes: e.target.value })}
        />
      </div>
      <div className={styles.tableCell}>
        <Button
          color="secondary"
          variant="outlined"
          className={styles.delete}
          onClick={() => removeFromCart(_id)}
        >
          <DeleteIcon />
        </Button>
      </div>
      <div className={styles.tableCell}>
        <input
          type="number"
          min="1"
          max="10"
          value={value}
          onChange={(e) => updateValue({ _id, value: parseInt(e.target.value) })}
        />

      </div>
      <div align="center" className={styles.tableCell}>
        $
        {price * value}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  value: PropTypes.number,
  _id: PropTypes.string,
  removeFromCart: PropTypes.func,
  updateValue: PropTypes.func,
  addNote: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (_id) => dispatch(removeFromCart(_id)),
  updateValue: ({ _id, value }) => dispatch(updateValue({ _id, value })),
  addNote: ({ _id, notes }) => dispatch(addNote({ _id, notes })),
});

const Container = connect(null, mapDispatchToProps)(Component);
export {
  Container as CartCard,
  Component as CartCardComponent,
};