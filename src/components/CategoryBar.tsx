
export default function CategoryBar(props: { categories: string[], selected: string, onClick: (category: string) => void }) {
  const { categories, selected, onClick } = props

  return (
    <div className=" w-full flex p-4 text-sm sm:text-lg gap-3 items-center ">
      <button onClick={() => onClick('ALL_POST')} className={selected === 'ALL_POST' ? `border-b-4 border-main px-3` : `px-3 py-1`}>all</button>
      {categories?.map((category, index) => (
        <button onClick={() => onClick(category)} className={selected === category ? `border-b-4 border-main px-3` : `px-3 py-1`} key={index} > {category}</button>
      ))
      }
    </div >
  );
}

