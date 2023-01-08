import { useEffect } from "react";

function useOnMount(callback) {
  useEffect(callback, []);
}
