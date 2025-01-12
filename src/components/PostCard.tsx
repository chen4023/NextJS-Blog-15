import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";


export default function PostCard(props: { post: Post, key: number }) {
  const post = props.post
  return (
    <Link href={`/posts/${post.path}`} className="rounded-lg border border-gray-100 shadow-lg">
      <Image src={`/images/posts/${post.path}.png`} alt={post.title} width='300' height='300' className="w-64 h-36 rounded-t-md" />
      <div className="p-2">
        <p className="text-right text-[10px] mt-2">{post.date}</p>
        <div className="flex flex-col items-center justify-center text-xs">
          <p className="font-bold">{post.title}</p>
          <p>{post.description}</p>
          <p className="text-[10px] bg-main px-2 font-semibold m-2 rounded-md">{post.category}</p>
        </div>
      </div>
    </Link>

  );
}

