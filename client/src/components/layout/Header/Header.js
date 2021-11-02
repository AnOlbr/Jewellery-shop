import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Header.module.scss';
import { Cart } from '../../views/Cart/Cart';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Button className={styles.name} href="/" color="inherit">Jewellery shop</Button>
        <div className={styles.cart}>
          <Button>
          <Cart />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};