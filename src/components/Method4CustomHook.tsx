import { Post } from '../types/post';
import { useFetch } from '../hooks/useFetch';
import { limit, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

/**
 * A React component that fetches posts from the API using a custom `useFetch` hook.
 * It handles loading and error states and renders a {@link PostMapper} component with the fetched posts.
 *
 * This example demonstrates how to use a custom hook to fetch data from an API
 * and manage the loading and error states. The fetch is automatically aborted
 * if the component unmounts before the request completes.
 */

export const Method4CustomHook = () => {
  const { data: posts, loading, error } = useFetch<Post[]>(
    `${url}?_limit=${limit}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!posts) return null;

  return <PostMapper posts={posts} />

};