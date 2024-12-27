import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import { limit, url } from '../constants/Constants';
import { PostMapper } from './PostMapper';

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