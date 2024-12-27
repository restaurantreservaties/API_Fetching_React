import { Post } from '../types/post';
import { useFetch } from '../hooks/useFetch';
import { limit, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

export const Method4CustomHook = () => {
  const { data: posts, loading, error } = useFetch<Post[]>(
    `${url}?_limit=${limit}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!posts) return null;

  return (
    <PostMapper posts={posts} />
  );
};