import { useState, useEffect } from "react";

function useDebounce(callback, delay) {
  const [debouncing, setDebouncing] = useState(false);

  useEffect(() => {
    if (debouncing) {
      const id = setTimeout(() => {
        setDebouncing(false);
        callback();
      }, delay);

      return () => clearTimeout(id);
    }
  }, [debouncing, callback, delay]);

  return debouncing;
}
