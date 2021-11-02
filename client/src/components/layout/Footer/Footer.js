import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <div className={styles.media}>
        <a href="https://instagram.com">
          <InstagramIcon className={styles.icon}>Instagram</InstagramIcon>
        </a>
        <a href="https://facebook.com">
          <FacebookIcon className={styles.icon}>Facebook</FacebookIcon>
        </a>
        <a href="https://twitter.com">
          <TwitterIcon className={styles.icon}>Twitter</TwitterIcon>
        </a>
      </div>
      <div className={styles.credits}>
      <p>© 2021</p>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
