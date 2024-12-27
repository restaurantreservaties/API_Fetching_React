import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

  /**
   * A React hook that fetches data from a URL and stores the response in state.
   *
   * The hook returns an object with three properties: `data`, `loading`, and
   * `error`. `data` is the response from the fetch, or null if the fetch has not
   * completed. `loading` is a boolean indicating whether the fetch is in
   * progress. `error` is an error message if the fetch failed, or null if the
   * fetch succeeded.
   *
   * The hook accepts a single argument, `url`, which is the URL to fetch.
   *
   * The hook uses the `useState` and `useEffect` hooks to manage the state of the
   * fetch. The `useEffect` hook is used to fire the fetch request when the
   * component mounts, and to clean up the fetch request when the component is
   * unmounted.
   *
   * The hook also uses an `AbortController` to abort the fetch if the component
   * is unmounted before the fetch completes.
   */
export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}