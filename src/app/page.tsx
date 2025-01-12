import PostCard from "@/components/PostCard";
import { featuredPosts } from "@/service/posts";
import Profile from "@/components/Profile";

export default async function Home() {
  const posts = await featuredPosts();

  return (
    <>
      <Profile />
      <h2 className="font-bold px-6">Featured Posts</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center mt-3">
        {posts?.map((post, index) =>
          <PostCard key={index} post={post} />
        )}
      </div>
    </>
  );
}
