import { PostData } from '@/app/api/posts';
import MarkdownPost from './MarkdownPost';
export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, category, content } = post
  return (
    <div>
      <section className='px-12'>
        <div className='flex gap-2 items-center justify-end mt-4 text-gray-600'>
          <p className=' font-bold'> {date.toString()}</p>
        </div>
        <div className='flex gap-3 items-center'>
          <h1 className='font-bold text-3xl'>{title}</h1>
          <span className='font-semibold text-sm bg-main px-2 py-0.5 rounded-md'>{category}</span>
        </div>
        <p className='font-bold text-lg'>{description}</p>
        <div className='border w-72 border-main mt-1 mb-3'></div>
        <MarkdownPost content={content} />
      </section>
    </div>
  );
}

