import IptvPlayer from "@/components/IptvPlayer";

const LivePage = () => {
  
    const streamUrl = process.env.NEXT_PUBLIC_IPTV_HLS_URL;

    if(!streamUrl){
        return <p>Live Stream is not configured.</p>
    }

  return (
    <main className="w-full p-10 space-y-5">
        <h1>Live TV</h1>
        <IptvPlayer src={streamUrl}/>
    </main>
  )
}

export default LivePage