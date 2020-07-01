import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const DataProviderContext = createContext({});
DataProviderContext.displayName = 'Redux Store';

function DataProvider(props) {
  const { children } = props;
  const { auth } = useSelector((state) => state);

  return (
    <DataProviderContext.Provider value={{ auth }}>
      {children}
    </DataProviderContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
