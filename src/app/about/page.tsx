import Profile from '@/components/Profile';
import React from 'react';
const TITLE_CLASS = "text-2xl font-bold pb-3";
export default function AboutPage() {
  return (
    <div className='h-full'>
      <Profile />
      <section className='flex flex-col justify-center gap-16 text-center py-12 h-[70vh] bg-gray-100'>
        <div>
          <h2 className={TITLE_CLASS}>👩🏻‍💻 Who am I ?</h2>
          <p>개발을 사랑하는 프론트엔드 개발자</p>
          <p>사람과 디자인을 담는 앱웹을 만들고 있습니다</p>
        </div>
        <div>
          <h2 className={TITLE_CLASS}>🏢 Career</h2>
          <p>경력입니다. 경력입니다. 경력입니다.</p>
          <p>경력입니다. 경력입니다. 경력입니다.</p>
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
    </div>
  );
}

