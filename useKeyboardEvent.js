import { useEffect } from "react";

function useKeyboardEvent(eventName, callback) {
  useEffect(() => {
    function handleEvent(e) {
      if (e.code === eventName) {
        callback(e);
      }
    }
    window.addEventListener("keydown", handleEvent);
    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [eventName, callback]);
}
