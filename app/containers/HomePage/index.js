/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import H1 from 'components/H1';
import CountDown from 'components/CountDown';
import moment from 'moment';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const revealDate = moment('20181221 19:00', 'YYYYMMDD HH:mm');
    if (moment() > revealDate) {
      console.log('revealed!');
    }
    return (
      <div>
        <H1>
          Priyanka Parmar, <br />
          Christmas is coming...
        </H1>
        {moment() < revealDate && <CountDown date={revealDate} />}
        <p>
          If there's one thing BRB has taught me - it's all about the reveal
        </p>
      </div>
    );
  }
}
