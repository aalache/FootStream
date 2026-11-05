import { useQuery } from "@tanstack/react-query";

async function fetchChannels(categoryId: string): Promise<Channel[]> {
  const params = new URLSearchParams({
    type: "channels",
    categoryId,
  });

  const response = await fetch(`/api/iptv/?${params.toString()}`, {
    // signal: signal,
  });

  if (!response.ok) {
    throw new Error("Could not load channels");
  }

  const channels = await response.json();

  if (!Array.isArray(channels)) {
    throw new Error("Invalid Channels response format.");
  }

  return channels;
}

export function useCategoryChannels(categoryId: string) {
  return useQuery({
    queryKey: ["channels", categoryId],
    queryFn: () => fetchChannels(categoryId),
    enabled: Boolean(categoryId),
  });
}
