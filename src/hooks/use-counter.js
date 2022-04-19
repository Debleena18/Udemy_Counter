import { useState, useEffect } from 'react';

//The name should start from capital letter.
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter; //We can return anything in the custom hooks- an [], {} or like here an num.
};

export default useCounter;