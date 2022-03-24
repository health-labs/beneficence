import React from 'react';
import SingleModalContext from '../context/SingleModalContext';

function useSingleModal() {
  const ctx = React.useContext(SingleModalContext);
  if (!ctx) throw new Error('single modal context inactive');
  return ctx;
}

export default useSingleModal;
