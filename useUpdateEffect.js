import { useRef, useEffect } from "react";

function useUpdateEffect(callback, dependencies) {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

export default useUpdateEffect;
