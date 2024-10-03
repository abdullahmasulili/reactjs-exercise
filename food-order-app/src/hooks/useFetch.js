import { useCallback, useEffect, useState } from "react";

export default function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await fetchFn();
      setFetchedData(data);
    } catch (error) {
      setError({ message: error.message || "Failed to fetch data..." });
    }

    setIsLoading(false);
  }, [fetchFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { fetchedData, isLoading, error, setFetchedData };
}
