import React, { useState, useRef, useCallback, useEffect } from 'react';

type HoverType = {
  reff: React.RefObject<HTMLElement>;
  startDelay?: number;
  endDelay?: number;
};
export const useHover = ({ reff, startDelay, endDelay }: HoverType) => {
  const [hovered, setHovered] = useState(false);
  const hoverRef = useRef(null);

  const onStartHovering = useCallback(() => {
    clearTimeout();
    setTimeout(() => {
      setHovered(true);
    }, startDelay || 200);
  }, [setHovered]);

  const onStopHovering = useCallback(() => {
    clearTimeout();
    setTimeout(() => {
      setHovered(false);
    }, endDelay || 200);
  }, [setHovered]);

  useEffect(() => {
    const cref: any = hoverRef.current;
    if (cref) {
      cref.addEventListener('mouseover', onStartHovering);
      cref.addEventListener('mouseout', onStopHovering);
    }
    return (): void => {
      if (cref) {
        cref.removeEventListener('mouseover', onStartHovering);
        cref.removeEventListener('mouseout', onStopHovering);
      }
    };
  }, [hoverRef]);

  return {
    hovered,
    setHovered,
    onStartHovering,
    onStopHovering,
  };
};
