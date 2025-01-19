import Image from "next/image";
import profile from '../../public/images/profile.png'
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center py-8 bg-main">
      <Image src={profile} alt="profile" className="w-60 h-60 rounded-full mb-2" />
      <h2 className="font-bold text-3xl">{`"안녕하세요, 저는 프론트엔드 개발자 현채은입니다."`}</h2>
      <p className="text-lg font-semibold">Frontend-developer</p>
      <p className="text-md">꿈을 코딩하는 사람, 드림코더 엘리</p>
      <Link href={'/contact'} className="bg-white text-md px-2 py-1 mt-2 font-bold rounded-lg">Contact Me</Link>
    </div>
  );
}

