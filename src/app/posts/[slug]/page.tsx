import { getPostDetail } from '@/app/api/posts';
import React from 'react';

type Prop = Promise<{ slug: string }>
export default async function PostDetail({ params }: { slug: Prop }) {
  const { slug } = await params;
  const post = await getPostDetail(slug)
  console.log(slug)
  console.log(post)
  return (
    <div>
      {post.title}
    </div>
  );
}

