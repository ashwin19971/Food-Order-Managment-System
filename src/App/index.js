import React from 'react';
import { Helmet } from 'react-helmet';

import Routes from '../routes';
import './App.css';
import {
  LOGO,
  ICON_LINK
} from '../config';

const App = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{LOGO}</title>
      <link rel="shortcut icon" href={ ICON_LINK }></link>
    </Helmet>
    {Routes}
  </div>
);

App.propTypes = {
};

export default App;
