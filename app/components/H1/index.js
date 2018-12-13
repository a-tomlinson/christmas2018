/**
 *
 * H1
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const TheH1 = styled.h1`
  font-size: 36px;
  line-height: 36px;

  @media screen and (min-width: 600px) {
    font-size: 72px;
    line-height: 72px;
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
