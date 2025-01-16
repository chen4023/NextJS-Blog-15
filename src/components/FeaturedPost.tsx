import React from 'react';
import PostCard from './PostCard';
import { featuredPosts } from '@/app/api/posts';

export default async function FeaturedPost() {
  const posts = await featuredPosts();

  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      <h2 className="font-bold px-2">Featured Posts</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
        {posts?.map((post, index) =>
          <PostCard key={index} post={post} />
        )}
      </div>
    </div>
  );
}

