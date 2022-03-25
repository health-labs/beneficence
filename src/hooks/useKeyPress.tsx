import React, { useCallback, useEffect } from 'react';

type KeyPressType = {
  key: string;
};

function useKeyPress() {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const keyPressed: KeyPressType = {
      key: event.key,
    };
    return keyPressed;
  }, []);
  return handleKeyPress;
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
}

export default useKeyPress;
