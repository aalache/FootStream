import { useChannels } from "@/context/ChannelsContext";
import ClientLivePage from "@/components/ClientLivePage";

const LivePage = () => {
  const streamUrl = `${process.env.XTREAM_BASE_URL}/live/${process.env.XTREAM_USERNAME}/${process.env.XTREAM_PASSWORD}`;

  return <ClientLivePage stream_url={streamUrl} />;
};

export default LivePage;
