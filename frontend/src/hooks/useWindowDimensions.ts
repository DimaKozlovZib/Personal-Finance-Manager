import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>| null>(null);
  const time = 700;

  useEffect(() => {
    function handleResize() {
        if (timer) {
           clearTimeout( timer)
        }
        const timeout = setTimeout(() => setWindowDimensions(getWindowDimensions()), time)
        setTimer(timeout)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
