import { getPosts } from '../api/posts';
import FilteredPost from '@/components/FilteredPost';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "개발 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))]
  return (
    <div className="flex gap-3 items-center justify-center mt-3">
      <FilteredPost posts={posts} categories={categories} />
    </div>
  );
}

