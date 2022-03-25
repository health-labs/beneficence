import React, { useCallback } from 'react';
import { WindowDimensionProps } from '../types/window';

function useWindowResize() {
  const isWindow = typeof window !== 'undefined';
  const handleResize = useCallback(() => {
    if (isWindow) {
      const { innerWidth, innerHeight } = window;
      return { width: innerWidth, height: innerHeight };
    }
    return { width: 0, height: 0 };
  }, []);

  const [windowDimensions, setWindowDimensions] =
    React.useState<WindowDimensionProps>(handleResize());

  React.useEffect(() => {
    const onResize = () => {
      setWindowDimensions(handleResize());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isWindow, handleResize]);
  return windowDimensions;
}

export default useWindowResize;
