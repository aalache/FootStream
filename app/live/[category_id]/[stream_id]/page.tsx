import Watch from "@/components/Watch";
import { Suspense } from "react";

interface LivePageProps {
  params: Promise<{
    category_id: string;
    stream_id: string;
  }>;
}

const LivePage = ({ params }: LivePageProps) => {
  return (
    <Suspense fallback={<p>Loading live stream ...</p>}>
      <ClientLivePage params={params} />
    </Suspense>
  );
};

const ClientLivePage = async ({ params }: LivePageProps) => {
  const { category_id, stream_id } = await params;
  const streamUrl = `${process.env.XTREAM_BASE_URL}/live/${process.env.XTREAM_USERNAME}/${process.env.XTREAM_PASSWORD}/${stream_id}.m3u8`;
  return (
    <Watch
      category_id={category_id}
      stream_id={stream_id}
      stream_url={streamUrl}
    />
  );
};

export default LivePage;
