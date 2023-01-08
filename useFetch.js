import { useState, useEffect } from "react";

function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return { response, error, isLoading };
}
