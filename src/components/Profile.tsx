import Image from "next/image";
import profile from '../../public/images/chen.png'
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center py-8 bg-main text-gray-700">
      <Image src={profile} alt="profile" className="w-64 h-64 rounded-full mb-8" />
      <h2 className="font-bold text-3xl">{`안녕하세요 🙇🏻‍♀️`}</h2>
      <h2 className="font-bold text-3xl">{`"저는 프론트엔드 개발자 현채은입니다."`}</h2>
      <p className="text-lg font-semibold">Frontend-developer</p>
      <p className="text-md">새롭게 알게 된 지식을 정리하는 공간입니다.</p>
      <Link href={'/contact'} className=" bg-yellow-200 text-gray-600 text-md px-2 py-1 mt-2 font-bold rounded-lg">📞 Contact Me</Link>
    </div>
  );
}

