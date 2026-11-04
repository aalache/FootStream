"use client";

import IptvPlayer from "./IptvPlayer";
import ChannelCard from "@/components/ChannelCard";
import { useChannels } from "@/context/ChannelsContext";
import Image from "next/image";

interface Props {
  stream_url: string;
}

const Watch = ({ stream_url }: Props) => {
  //# HLS to xtream code api  https://YOUR_SERVER/live/USERNAME/PASSWORD/STREAM_ID.m3u8

  const { channelsList, selectedStream, setSelectedStream } = useChannels();

  if (!stream_url) {
    return <p>Live Stream is not configured.</p>;
  }

  return (
    <main className="w-full px-10  grid grid-cols-10 pt-16 pb-5 gap-3 min-h-screen">
      <div className="col-span-7 space-y-6 pt-5">
        <h1 className="text-2xl font-bold">Live TV</h1>
        <IptvPlayer src={stream_url} />
        <div className="flex items-center gap-2">
          <Image
            src={String(selectedStream?.stream_icon)}
            width={50}
            height={50}
            alt="stream icon"
          />
          <h1>{selectedStream?.name}</h1>
        </div>
      </div>

      <div className="col-span-3  h-[85vh] overflow-y-scroll scrollbar-none ">
        <h1 className="text-xl font-bold p-5">Channels</h1>
        <div className="space-y-2 ">
          {!channelsList || channelsList.length === 0 ? (
            <p>No channels available.</p>
          ) : (
            channelsList.map((channel) => (
              <ChannelCard
                key={channel.stream_id}
                channel={channel}
                selectedChannel={selectedStream}
                setSelectedChannel={setSelectedStream}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Watch;
