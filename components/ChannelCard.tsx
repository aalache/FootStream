import Image from 'next/image'
import Link from 'next/link'

interface ChannelCardProps {
    stream_id: number;
    name: string;
    stream_icon: string;
}

const ChannelCard = ({stream_id,name,stream_icon}: ChannelCardProps) => {
  return (
    <Link href={`/stream/${stream_id}`} className="flex items-center justify-between space-y-2 rounded-md p-3 border border-slate-800/50  gap-2 ">
            <div key={stream_id} className="flex items-center gap-2">
                <Image src={stream_icon } alt="channel icon" width={50} height={50}/>
                <h1>{name}</h1>
            </div>
            <div className="px-3 py-1.5 rounded-md bg-neon-green/10 text-neon-green text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-ping "></div>
                <span>Live</span>
            </div>
    </Link>
  )
}

export default ChannelCard