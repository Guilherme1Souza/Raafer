import React, { useEffect, useState } from 'react';

const AnimatedNumber = ({ value, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/\D/g, ''));
    if (start === end) return;

    const incrementTime = 30;
    const steps = Math.floor(duration / incrementTime);
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  const format = (num) => {
    return num.toLocaleString('pt-BR');
  };

  return <strong> + {format(count)}</strong>;
};

export default AnimatedNumber;
