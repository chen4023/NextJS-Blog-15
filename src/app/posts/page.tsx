import { getPosts } from '../api/posts';
import FilteredPost from '@/components/FilteredPost';

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))]
  return (
    <div className="flex gap-3 items-center justify-center mt-3">
      <FilteredPost posts={posts} categories={categories} />
    </div>
  );
}

