"use client";

import { useEffect, useState } from "react";
import IptvPlayer from "./IptvPlayer";
import ChannelCard from "@/components/ChannelCard";
import { useChannels } from "@/context/ChannelsContext";

interface Props {
  category_id: string;
  stream_id: string;
  stream_url: string;
}

const Watch = ({ category_id, stream_id, stream_url }: Props) => {
  //# HLS to xtream code api  https://YOUR_SERVER/live/USERNAME/PASSWORD/STREAM_ID.m3u8

  const { channelsList } = useChannels();
  const [channels, setChannels] = useState<Channel[]>([]);

  if (!stream_url) {
    return <p>Live Stream is not configured.</p>;
  }

  useEffect(() => {
    setChannels(channelsList);
  }, [category_id, stream_id]);

  return (
    <main className="w-full px-10  grid grid-cols-10 pt-16 pb-5 gap-3 min-h-screen">
      <div className="col-span-7 space-y-6 pt-5">
        <h1 className="text-2xl font-bold">Live TV</h1>
        <IptvPlayer src={stream_url} />
      </div>

      <div className="col-span-3  h-[85vh] overflow-y-scroll scrollbar-none ">
        <h1 className="text-xl font-bold p-5">Channels</h1>
        <div className="space-y-2 ">
          {channels.length === 0 ? (
            <p>No channels available.</p>
          ) : (
            channels.map((channel) => (
              <ChannelCard
                key={channel.stream_id}
                stream_id={channel.stream_id}
                name={channel.name}
                stream_icon={String(channel.stream_icon)}
                category_id={category_id}
                isSelected={stream_id === String(channel.stream_id)}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Watch;
