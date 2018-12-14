/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import moment from 'moment';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import styled from 'styled-components';

import GlobalStyle from '../../global-styles';

const Background = styled.div`
  background-image: ${props =>
    props.revealed
      ? `url('https://media.giphy.com/media/3ofT5CzWVsaJKxNyec/giphy.gif')`
      : ''};
  background-size: cover;
  background-position: center;
  padding: 30px;
`;

export default function App() {
  const revealDate = moment('20181221 19:00', 'YYYYMMDD HH:mm');
  let revealed = false;
  if (moment() >= revealDate) {
    revealed = true;
  }
  return (
    <Background revealed={revealed}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Background>
  );
}
