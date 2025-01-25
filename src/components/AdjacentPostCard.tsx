import { Post } from '@/app/api/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ICON_CLASS = 'text-5xl text-main m-4 transition-all group-hover:text-6xl'

type Props = {
  post: Post
  type: string
}
export default function adjacentPostCard({ post: { title, description, path }, type }: Props) {
  return (
    <Link href={`/posts/${path}`} className='group relative overflow-hidden w-full bg-black max-h-56'>
      <Image className='w-full opacity-40' src={`/images/posts/${path}.png`} alt={title} width={150} height={100} />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full justify-around text-white px-6'>
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        <div className='w-full text-center'>
          <h3 className='lg:text-3xl text-xl font-bold mt-6 sm:mt-0'>{title}</h3>
          <p className='font-bold hidden sm:block'>{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>

    </Link>
  );
}

