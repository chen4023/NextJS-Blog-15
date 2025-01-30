import { featuredPosts, getPostDetail } from '@/app/api/posts';
import Image from 'next/image';
import PostContent from '@/components/PostContent';
import AdjacentPostCard from '@/components/AdjacentPostCard';
import { Metadata } from 'next';
type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params
  const { title, description } = await getPostDetail(slug)

  return { title, description }
}

export default async function PostDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getPostDetail(slug)
  const { title, path, next, prev } = post
  return (
    <article className='rounded-2xl shadow-lg m-4 bg-gray-100'>
      <Image className='w-full max-h-[500px] h-1/5'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await featuredPosts();
  return posts ? posts.map((post) => ({ slug: post.path })) : []

}
