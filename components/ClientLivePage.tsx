"use client";

import { useChannels } from "@/context/ChannelsContext";
import Watch from "./Watch";

interface Props {
  stream_url: string;
}

const ClientLivePage = ({ stream_url }: Props) => {
  //   const streamUrl = `${process.env.XTREAM_BASE_URL}/live/${process.env.XTREAM_USERNAME}/${process.env.XTREAM_PASSWORD}/${stream_id}.m3u8`;

  console.log("stream url:", stream_url);
  const { selectedStream } = useChannels();

  if (!selectedStream) {
    return <p>Please select a channel first.</p>;
  }

  stream_url += `/${selectedStream.stream_id}.m3u8`;

  console.log("stream url with stream Id:", stream_url);

  return <Watch stream_url={stream_url} />;
};

export default ClientLivePage;
