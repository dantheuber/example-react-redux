import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'redux-little-router';
// import './normalize.css';
// import './main.css';

export const App = ({
  count,
  increaseCount,
  decreaseCount,
}) => (
  <main>
    <div>
      <h1>Count:<small>{count}</small></h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
    <Fragment for="/someRoute">
      <h1>Some Route!</h1>
    </Fragment>
  </main>
);

App.propTypes = {
  count: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};
App.displayName = 'App';
