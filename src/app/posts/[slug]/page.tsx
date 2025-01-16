import { getPostDetail } from '@/app/api/posts';
import React from 'react';
type Props = {
  params: Promise<{ slug: string }>
}
export default async function PostDetail({ params }: Props) {
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

