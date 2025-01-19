'use client'
import { Post } from '@/app/api/posts';
import React, { useState } from 'react';
import PostCard from './PostCard';
import CategoryBar from './CategoryBar';

export default function FilteredPost(props: { posts: Post[], categories: string[] }) {
  const { posts, categories } = props
  const [selected, setSelected] = useState('ALL_POST');
  const filtered = selected === 'ALL_POST' ? posts : posts.filter((post) => post.category === selected)
  return (
    <div className='flex flex-wrap gap-4 w-full items-center justify-center'>
      <CategoryBar categories={categories} selected={selected} onClick={setSelected} />
      {filtered.map((post, index) => <PostCard post={post} key={index} />)}
    </div>
  );
}

