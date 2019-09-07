import { useRef, useEffect } from "react";

/**
 * @author Dan Abramov
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/#just-show-me-the-code
 */
export default function useInterval(callback?: () => any, delay?: number) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    if (!delay) {
      return undefined;
    }
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
