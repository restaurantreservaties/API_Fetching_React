import { Post } from "../types/post"
import { PostCard } from "./PostCard"

interface PostMapperProps {
    posts: Post[]
}

/**
 * A component that takes an array of posts and maps them to a PostCard
 * component, which renders the post title and body. The PostCard components
 * are rendered in a vertical stack with a gap of 1rem.
 *
 * @param {Post[]} posts - The array of posts to map
 *
 * @returns {JSX.Element} The JSX element containing the mapped PostCard
 * components
 */
export const PostMapper = ({ posts }: PostMapperProps) => {
    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}