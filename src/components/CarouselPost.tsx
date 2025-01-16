'use client'

import React from 'react';
import Carousel, { ResponsiveType as CarouselResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PostCard from './PostCard';
import { Post } from '@/app/api/posts';

type Props = {
  posts: Post[];
  responsive: CarouselResponsiveType;  // react-multi-carousel의 타입 사용
};

export default function CarouselPost({ posts, responsive }: Props) {
  return (
    <div className="w-full my-4">
      <h2 className="sm:ml-2 ml-20 font-bold px-2 text-xl w-[133px] border-b-4 border-main">You may like</h2>
      <Carousel
        draggable={true}
        infinite={true}
        itemClass="px-2"
        containerClass="py-4"
        autoPlaySpeed={500}
        keyBoardControl={true}
        responsive={responsive}>
        {posts.map((post, index) => (
          <div key={index} className="w-full flex items-center justify-center">
            <PostCard post={post} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}