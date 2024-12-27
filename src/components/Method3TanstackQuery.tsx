import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/post';
import { limit, queryKey, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

export const Method3TanstackQuery = () => {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await fetch(`${url}?_limit=${limit}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!posts) return null;

  return (
      <PostMapper posts={posts} />
    );
};