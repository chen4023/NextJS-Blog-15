export type BannerData = {
  message: string
  status: string
}

export default function Banner({ banner: { message, status } }: { banner: BannerData }) {
  const icon = status === 'success' ? '📩' : '🚨'
  return (
    <div>
      <p className={`${status === 'success' ? 'bg-yellow-100' : 'bg-red-300'} p-2 px-3 font-extrabold text-xl`}>{`${icon} ${message}`}</p>
    </div>
  );
}

