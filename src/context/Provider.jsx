import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [api, setApi] = useState([]);
  const contextValue = React.useMemo(() => ({
    api,
    setApi,
  }), [
    api,
  ]);
  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
