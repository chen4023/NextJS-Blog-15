import { PostData } from '@/app/api/posts';
import MarkdownPost from './MarkdownPost';
export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, category, content } = post
  return (
    <section className='px-10'>
      <div className='flex gap-2 items-center justify-end mt-4 text-gray-600'>
        <p className='font-bold'> {date.toString()}</p>
      </div>
      <span className='font-semibold text-sm bg-main px-2 py-1 rounded-md'>{category}</span>
      <h1 className='font-bold mt-3 text-4xl'>{title}</h1>
      <p className='font-bold text-xl'>{description}</p>
      <div className='border w-72 border-main mt-1 mb-3'></div>
      <MarkdownPost content={content} />
    </section>
  );
}

