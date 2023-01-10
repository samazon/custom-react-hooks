import { useState } from "react";

function useRerender() {
  const [, setState] = useState();
  return () => setState({});
}

export default useRerender;
