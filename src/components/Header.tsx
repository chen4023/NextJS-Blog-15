import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-between items-center my-4 px-4'>
      <Link href={'/'} className='text-3xl font-bold'>📚 ChenLog</Link>
      <div className='flex text-xl gap-4'>
        <Link href={'/'}>home</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/posts'}>posts</Link>
        <Link href={'/contact'}>contact</Link>
      </div>
    </header>
  );
}

