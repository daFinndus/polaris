import { useEffect, useState } from "react";

/**
 * Hook for getting the window size.
 * This is basically stolen from stack overflow.
 * @returns The window size, width and height in pixels.
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// Stolen from here: https://stackoverflow.com/questions/73070114/i-want-to-change-style-according-to-window-width-using-states
