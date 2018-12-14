/**
 *
 * H1
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: 12px;
`;

const Number = styled.div`
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  font-size: 32px;
  line-height: 32px;
`;

/* eslint-disable react/prefer-stateless-function */
class Clue extends React.Component {
  render() {
    const { number } = this.props;
    return (
      <Wrapper>
        <Number>{number}</Number>
        <Body>{this.props.children}</Body>
      </Wrapper>
    );
  }
}

Clue.propTypes = {};

export default Clue;
