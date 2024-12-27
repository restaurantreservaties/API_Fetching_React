import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';
import { limit, queryKey, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

/**
 * A React component that fetches posts from the API using TanStack's `useQuery`
 * hook. It also handles loading and error states with `useQuery`.
 *
 * The component renders a {@link PostMapper} component with the fetched posts.
 *
 * This example demonstrates how to fetch data from an API using TanStack's
 * `useQuery` hook. It also demonstrates how to handle loading and error states
 * using `useQuery`.
 */
export const Method3TanstackQuery = () => {
  const { data: posts, isLoading, error } = useQuery<Post[]>({

    /**
     * The query key is used to identify the query and determine whether it should
     * be refetched. In this case, the query key is an array containing the query
     * key constant and the limit constant. This means that the query will be
     * refetched if the limit constant changes.
     */
    queryKey: queryKey,
    /**
     * The query function Fetches the posts from the API. The fetch is memoized by TanStack's
     * `useQuery` hook. If the fetch fails, an error is thrown. The response is
     * expected to be a JSON array of posts.
     */
    queryFn: async () => {
      const response = await fetch(`${url}?_limit=${limit}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!posts) return null;

  return <PostMapper posts={posts} />
};