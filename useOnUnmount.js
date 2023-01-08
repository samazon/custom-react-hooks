import { useEffect } from "react";

function useOnUnmount(callback) {
  useEffect(() => callback, []);
}
