import { useCallback, useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue, fetchMethod) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function resetData() {
    setFetchedData(initialValue);
  }

  const fetchData = useCallback(
    async function fetchData(payload) {
      setIsLoading(true);
      setError(undefined);

      try {
        const data = await fetchFn(payload);
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data..." });
      }

      setIsLoading(false);
    },
    [fetchFn]
  );

  useEffect(() => {
    if (fetchMethod === "GET") {
      fetchData();
    }
  }, [fetchData, fetchMethod]);

  return { fetchedData, isLoading, error, fetchData, resetData };
}
