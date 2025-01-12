import { getCategory } from "@/service/posts";

export default async function CategoryBar() {
  const categorys = await getCategory();
  return (
    <div className="flex flex-col w-1/5 m-2 text-sm gap-3 items-center">
      <p className=" border-b-4 border-main">Category</p>
      {categorys?.map((category, index) => (
        <button className="bg-main px-3 rounded-md" key={index}>{category}</button>
      ))}
    </div>
  );
}

