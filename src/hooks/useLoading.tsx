import React from 'react';
import LoadingApp from '../context/LoadingApp';

function useLoading() {
  const ctx = React.useContext(LoadingApp);
  if (!ctx) {
    console.error('loading context inactive');
  }
  return ctx;
}

export default useLoading;
