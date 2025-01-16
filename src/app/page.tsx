import FeaturedPost from "@/components/FeaturedPost";
import Profile from "@/components/Profile";

export default async function Home() {

  return (
    <section>
      <Profile />
      <FeaturedPost />
    </section>
  );
}
