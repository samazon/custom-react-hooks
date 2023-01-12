import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hovering, setHovering] = useState(false);
  const ref = useRef(null);

  const enter = () => setHovering(true);
  const leave = () => setHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);

      return () => {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      };
    }
  }, [ref.current]); // Only re-run if ref changes

  return [ref, hovering];
}
