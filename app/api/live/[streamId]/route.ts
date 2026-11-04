import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ streamId: string }> },
) {
  const { streamId } = await params;

  if (!/^\d+$/.test(streamId)) {
    return new Response("Invalid stream ID", { status: 400 });
  }

  const { XTREAM_BASE_URL, XTREAM_USERNAME, XTREAM_PASSWORD } = process.env;

  if (!XTREAM_BASE_URL || !XTREAM_USERNAME || !XTREAM_PASSWORD) {
    return new Response("Missing Xtream configuration", {
      status: 500,
    });
  }

  // Preserve your exact Xtream API format
  const streamUrl = `${XTREAM_BASE_URL}/live/${XTREAM_USERNAME}/${XTREAM_PASSWORD}/${streamId}.m3u8`;

  //   const response = await fetch(streamUrl, {
  //     cache: "no-store",
  //   });

  //   if (!response.ok || !response.body) {
  //     return new Response("Stream unavailable", { status: 502 });
  //   }

  //   return new Response(response.body, {
  //     headers: {
  //       "Content-Type":
  //         response.headers.get("content-type") || "application/vnd.apple.mpegurl",
  //       "Cache-Control": "no-store",
  //     },
  //   });
  return new Response(streamUrl);
}
