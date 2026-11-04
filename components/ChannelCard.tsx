import Image from "next/image";
import Link from "next/link";

interface ChannelCardProps {
  channel: Channel;
  selectedChannel: Channel | null;
  setSelectedChannel: (channel: Channel | null) => void;
}

const ChannelCard = ({
  channel,
  selectedChannel,
  setSelectedChannel,
}: ChannelCardProps) => {
  if (!channel) {
    return null;
  }
  const { category_id, name, stream_id, stream_icon } = channel;
  const isSelected = selectedChannel?.stream_id === stream_id;

  return (
    <Link
      href={`/live`}
      className={`flex items-center justify-between space-y-2 rounded-md p-3 border border-slate-800/50  gap-2 ${isSelected ? "bg-neon-green/20 border-neon-green" : ""}`}
      onClick={() => setSelectedChannel(channel)}
    >
      <div key={stream_id} className="flex items-center gap-2">
        <Image
          src={String(stream_icon)}
          alt="channel icon"
          width={50}
          height={50}
        />
        <h1>{name}</h1>
      </div>
      <div className="px-3 py-1.5 rounded-md bg-neon-green/10 text-neon-green text-sm flex items-center gap-2">
        <div className="w-2 h-2 bg-neon-green rounded-full animate-ping "></div>
        <span>Live</span>
      </div>
    </Link>
  );
};

export default ChannelCard;
