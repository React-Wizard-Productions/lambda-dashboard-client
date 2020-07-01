import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from './theme/ThemeProvider';
import RouterProvider from './routing/RouterProvider';
import Redux from './redux/Redux';
import Actions from './redux/Actions';
import DataProvider from './redux/DataProvider';

function Providers(props) {
  const { children } = props;

  return (
    <Redux>
      <Actions>
        <DataProvider>
          <RouterProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </RouterProvider>
        </DataProvider>
      </Actions>
    </Redux>
  );
}

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
