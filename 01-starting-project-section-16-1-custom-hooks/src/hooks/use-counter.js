// Custom Hooks must start with `use` before to let React know this is a custom hook
// React hooks can only be used inside Function Components and Custom Hooks
import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  // we can return anything we wants [], {}, single value
  return counter;
};

export default useCounter;
