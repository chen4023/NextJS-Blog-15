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
