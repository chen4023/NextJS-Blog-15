import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 p-5">
      <h2 className="text-4xl font-extrabold">ContactPage</h2>
      <p>ads4023@naver.com</p>
      <div className="flex text-3xl gap-3">
        <Link href='https://velog.io/@chen4023/posts'><SiVelog /></Link>
        <Link href='https://github.com/chen4023'><FaGithub /></Link>
      </div>
      <p className="text-2xl font-extrabold">OR Send me an email 💌</p>
      <ContactForm />
    </div>
  );
}

