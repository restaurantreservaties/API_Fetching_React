import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import { limit, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

  /**
   * A React component that fetches posts from the API using an async/await `fetch`
   * call and stores the response in state using `useState`. It also handles loading
   * and error states with `useState`.
   *
   * The component uses the `useEffect` hook to fire the fetch request when the
   * component mounts.
   *
   * The component renders a {@link PostMapper} component with the fetched posts.
   *
   * This example demonstrates how to fetch data from an API using an async/await
   * `fetch` call and store the response in state using `useState`. It also
   * demonstrates how to handle loading and error states using `useState`.
   * The example also shows how to use the `useEffect` hook to fire the fetch request
   * when the component mounts.
   */
export const Method2AsyncAwaitUseEffect = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Fetches the posts from the API. The fetch is async/await so the calling
     * code does not block. If the fetch fails, an error is thrown. The response
     * is expected to be a JSON array of posts.
     */
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${url}?_limit=${limit}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <PostMapper posts={posts} />
    );
};