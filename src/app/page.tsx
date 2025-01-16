import PostCard from "@/components/PostCard";
import { featuredPosts } from "./api/posts";
import Profile from "@/components/Profile";

export default async function Home() {
  const posts = await featuredPosts();

  return (
    <section>
      <Profile />
      <div className="w-full mx-auto max-w-screen-2xl">
        <h2 className="font-bold px-2">Featured Posts</h2>
        <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
          {posts?.map((post, index) =>
            <PostCard key={index} post={post} />
          )}
        </div>
      </div>
    </section>
  );
}
