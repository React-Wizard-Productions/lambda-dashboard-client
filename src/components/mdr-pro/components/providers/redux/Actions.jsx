import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useActions } from '../../../../../store/useActions';

export const ActionsContext = createContext({});
ActionsContext.displayName = 'Actions';

function Actions(props) {
  const actions = useActions();
  const { children } = props;

  return (
    <ActionsContext.Provider value={actions}>
      {children}
    </ActionsContext.Provider>
  );
}

Actions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Actions;
