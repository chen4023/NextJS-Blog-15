'use server'
import FeaturedPost from "@/components/FeaturedPost";
import Profile from "@/components/Profile";
import { getPosts } from '@/app/api/posts';
import CarouselPost from "@/components/CarouselPost";
import { responsive } from "@/utils/carousel";


export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="w-full mx-auto">
      <Profile />
      <FeaturedPost />
      <CarouselPost posts={posts} responsive={responsive} />
    </section>
  );
}
