import { Post } from "../types/post"
import { PostCard } from "./PostCard"

interface PostMapperProps {
    posts: Post[]
}

export const PostMapper = ({ posts }: PostMapperProps) => {
    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}