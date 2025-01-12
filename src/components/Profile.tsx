import Image from "next/image";
import profile from '../../public/images/profile.png'
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center py-4 my-3 bg-main">
      <Image src={profile} alt="profile" className="w-32 h-32 rounded-full mb-2" />
      <h2 className="font-bold">안녕하세요, 저는 현채은입니다.</h2>
      <p className="text-sm font-semibold">Frontend-developer</p>
      <p className="text-xs">꿈을 코딩하는 사람, 드림코더 엘리</p>
      <Link href={'/contact'} className="bg-white text-sm px-2 py-1 mt-2 font-bold rounded-lg">Contact Me</Link>
    </div>
  );
}

