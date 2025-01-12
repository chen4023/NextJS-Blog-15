import CategoryBar from '@/components/CategoryBar';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/service/posts';
import React from 'react';

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className='flex items-stretch'>
      <CategoryBar />
      <div className="flex flex-wrap gap-3 items-center justify-center mt-3">
        {posts?.map((post, index) =>
          <PostCard key={index} post={post} />
        )}
      </div>
    </div >
  );
}

