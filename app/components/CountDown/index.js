/**
 *
 * CountDown
 *
 */

import React from 'react';
import styled from 'styled-components';
import ReactMomentCountDown from 'react-moment-countdown';
import H1 from '../H1';

const Ticker = styled(H1)``;

class CountDown extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { date } = this.props;
    return (
      <Ticker>
        <p>
          <ReactMomentCountDown toDate={date} targetFormatMask="DD" /> Days
          <br />
          <ReactMomentCountDown toDate={date} targetFormatMask="HH" /> Hours
          <br />
          <ReactMomentCountDown toDate={date} targetFormatMask="mm" /> Minutes
          <br />
          <ReactMomentCountDown toDate={date} targetFormatMask="ss" /> Seconds
        </p>
      </Ticker>
    );
  }
}

CountDown.propTypes = {};

export default CountDown;
