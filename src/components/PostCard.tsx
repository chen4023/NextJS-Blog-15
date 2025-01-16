import { Post } from '@/app/api/posts';
import Image from "next/image";
import Link from "next/link";


export default function PostCard(props: { post: Post, key: number }) {
  const post = props.post
  return (
    <Link href={`/posts/${post.path}`} className="max-h-72 rounded-lg border border-gray-100 shadow-lg">
      <Image src={`/images/posts/${post.path}.png`} alt={post.title} width='300' height='300' className="w-80 h-40 rounded-t-md" />
      <div className="p-2">
        <p className="text-right text-xs mt-2">{post.date}</p>
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="font-bold">{post.title}</p>
          <p>{post.description.substring(0, 20) + '...'}</p>
          <p className="text-xs bg-main px-2 py-1 font-semibold m-2 rounded-md">{post.category}</p>
        </div>
      </div>
    </Link>

  );
}

