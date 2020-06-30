import React from 'react';
import { render } from 'react-dom';

import Auth from './components/mdr-pro/components/layouts/Auth';
import Providers from './components/mdr-pro/components/providers/Providers';

render(
  <Providers>
    <Auth />
  </Providers>,
  document.getElementById('root'),
);
