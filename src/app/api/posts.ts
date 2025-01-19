import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: number;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function featuredPosts(): Promise<Post[] | undefined> {
  const posts = await getPosts();
  const data = posts.filter((post) => post.featured);
  return data;
}

export async function getPostDetail(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 데이터를 찾을 수 없음`);
  const content = await fs.readFile(filePath, "utf-8");
  return { ...metadata, content };
}
