import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import { limit, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

/**
 * A React component that fetches posts from the API using `fetch` and stores the response in state
 * using `useState`. It also handles loading and error states with `useState`.
 * The component uses the `useEffect` hook to fire the fetch request when the component mounts.
 *
 * The component renders a {@link PostMapper} component with the fetched posts.
 *
 * This example demonstrates how to fetch data from an API using `fetch` and store the response in state
 * using `useState`. It also demonstrates how to handle loading and error states using `useState`.
 * The example also shows how to use the `useEffect` hook to fire the fetch request when the component mounts.
 */
export const Method1FetchUseEffect = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${url}?_limit=${limit}`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

 return (
     <PostMapper posts={posts} />
   );
};