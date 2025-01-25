import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";

const LINKS = [
  { icon: <SiVelog />, url: 'https://velog.io/@chen4023/posts' },
  { icon: <FaGithub />, url: 'https://github.com/chen4023' }
]

export default function ContactPage() {
  return (
    <section className="w-full flex flex-col items-center gap-3 p-5">
      <h2 className="text-4xl font-extrabold">ContactPage</h2>
      <p>ads4023@naver.com</p>
      <div className="flex text-3xl gap-3">
        {LINKS.map((link, index) => <a key={index} href={link.url}>{link.icon}</a>)}
      </div>
      <p className="text-2xl font-extrabold">OR Send me an email 💌</p>
      <ContactForm />
    </section>
  );
}

