import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-between items-center mt-2 px-4'>
      <Link href={'/'} className='text-xl font-bold'>ChenLog</Link>
      <div className='flex gap-4 text-sm'>
        <Link href={'/'}>home</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/posts'}>posts</Link>
        <Link href={'/contact'}>contact</Link>
      </div>
    </header>
  );
}

