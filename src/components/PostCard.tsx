import React from 'react';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

/**
 * A component that renders a post from the API as a card.
 *
 * The card component renders the post title and body, with a hover effect.
 *
 * @param {PostCardProps} props - The props for the component
 * @param {Post} props.post - The post to render
 *
 * @returns {JSX.Element} The JSX element for the component
 */
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};