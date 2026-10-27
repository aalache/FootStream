'use client';

import { useEffect,useRef,useState } from "react";
import Hls from "hls.js";

interface Props {
    src: string
}

export default function IptvPlayer({src}: Props){

    const videoRef = useRef<HTMLVideoElement>(null);
    const [error,setError] = useState('');

    useEffect(()=>{
        const video = videoRef.current;
        if(!video || !src) return;

        let hls:Hls | undefined
        setError('');

        if(video.canPlayType('application/vnd.apple.mpegurl')){
            video.src = src;
        } else if(Hls.isSupported()){
            hls = new Hls()
            hls.loadSource(src)
            hls.attachMedia(video)

            hls.on(Hls.Events.ERROR,(_,data)=>{
                if(data.fatal){
                    setError('Unable to play this stream.')
                    hls?.destroy()
                }
            })
        } else {
            setError("This Browser doesn't support the HLS playback.")
        }

        return () => {
            hls?.destroy()
            video.pause()
            video.removeAttribute('src')
            video.load()
        }


    },[src]);

    return (
        <div className="w-5xl rounded-lg">
            <video 
                ref={videoRef}
                controls
                playsInline
                autoPlay
                muted
                preload="metadata"
                className="w-full aspect-video bg-black rounded-xl"
            />

            {error && <p role="alert">{error}</p>}
        </div>
    )
}