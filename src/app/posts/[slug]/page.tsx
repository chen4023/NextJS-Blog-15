import { getPostDetail } from '@/app/api/posts';
import Image from 'next/image';
import PostContent from '@/components/PostContent';
type Props = {
  params: Promise<{ slug: string }>
}
export default async function PostDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getPostDetail(slug)
  const { title, path } = post
  return (
    <article className='rounded-2xl overflow-hidden shadow-lg m-4 bg-gray-100'>
      <Image className='w-full max-h-[500px] h-1/5'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}

