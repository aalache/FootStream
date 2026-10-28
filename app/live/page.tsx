import IptvPlayer from "@/components/IptvPlayer";



const LivePage = () => {

    //# HLS  https://YOUR_SERVER/live/USERNAME/PASSWORD/STREAM_ID.m3u8
  
    // const streamUrl = process.env.NEXT_PUBLIC_IPTV_HLS_URL;

    const streamUrl = `${process.env.XTREAM_BASE_URL}/live/${process.env.XTREAM_USERNAME}/${process.env.XTREAM_PASSWORD}/987845.m3u8`

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