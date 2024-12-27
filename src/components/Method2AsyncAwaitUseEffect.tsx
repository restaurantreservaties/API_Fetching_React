import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import { limit, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

export const Method2AsyncAwaitUseEffect = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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