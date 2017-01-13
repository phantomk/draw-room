import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import Gallery from './routes/Gallery'

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Gallery} />
    </Router>
  );
}
