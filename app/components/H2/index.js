/**
 *
 * H1
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const TheH1 = styled.h1`
  font-size: 28px;
  line-height: 28px;

  @media screen and (min-width: 600px) {
    font-size: 54px;
    line-height: 54px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class H1 extends React.Component {
  render() {
    return <TheH1>{this.props.children}</TheH1>;
  }
}

H1.propTypes = {};

export default H1;
