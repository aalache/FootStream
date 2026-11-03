"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface Props {
  src: string;
}

export default function IptvPlayer({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;

    // console.log("[Player] useEffect started", { src });
    // console.log("[Player] video element exists:", !!video);

    if (!video || !src) {
      console.warn("[Player] Missing video element or stream URL");
      return;
    }

    let hls: Hls | undefined;

    setError("");

    if (Hls.isSupported()) {
      // console.log("[Player] Using hls.js for debugging");

      hls = new Hls();

      // hls.on(Hls.Events.MANIFEST_LOADED, (_event, data) => {
      //     console.log("[Player] Manifest loaded:", data.url);
      // });

      // hls.on(Hls.Events.FRAG_LOADING, (_event, data) => {
      //     console.log("[Player] Segment URL:", data.frag.url);
      // });

      // hls.on(Hls.Events.ERROR, (_event, data) => {
      //     console.error("[Player] HLS error:", {
      //     type: data.type,
      //     details: data.details,
      //     fatal: data.fatal,
      //     status: data.response?.code,
      //     });
      // });

      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      console.log("[Player] Using native HLS");
      video.src = src;
    } else {
      setError("HLS playback is not supported.");
    }

    return () => {
      console.log("[Player] Cleaning up");
      hls?.destroy();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [src]);

  return (
    <div className="w-full rounded-lg">
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
  );
}
