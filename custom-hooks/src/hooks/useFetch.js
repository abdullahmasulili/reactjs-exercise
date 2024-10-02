import { useEffect } from "react";
import { useState } from "react";

export function useFetch(fetchFn) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { fetchedData, error, isFetching };
}
