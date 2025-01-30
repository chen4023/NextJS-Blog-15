import Profile from '@/components/Profile';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "About Me",
  description: "Chen 커리어 소개 페이지",
};

const TITLE_CLASS = "text-2xl font-extrabold pb-3";

export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className='flex flex-col gap-6 shadow-lg m-8 p-8 text-center bg-gray-100'>
        <div>
          <h2 className={TITLE_CLASS}>👩🏻‍💻 Who am I ?</h2>
          <p>개발을 사랑하는 프론트엔드 개발자<br />
            사람과 디자인을 담는 앱웹을 만들고 있습니다</p>
        </div>
        <div>
          <h2 className={TITLE_CLASS}>🏢 Career</h2>
          <p>경력입니다. 경력입니다. 경력입니다.<br />
            경력입니다. 경력입니다. 경력입니다.</p>
        </div>
        <div>
          <h2 className={TITLE_CLASS}>🔨 Skills</h2>
          <p>NextJS, React, Tailwindcss, Zustand</p>
        </div>
        <div>
          <h2 className={TITLE_CLASS}>🎨 Github Link</h2>
          <a href='https://github.com/chen4023'>github.com/chen4023</a>
        </div>
      </section>
    </>
  );
}

