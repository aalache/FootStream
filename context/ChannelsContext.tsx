"use client";

import { createContext, useContext, useState } from "react";

interface ChannelsContextType {
  channelsList: Channel[];
  setChannelsList: (channels: Channel[]) => void;
}

export const ChannelsContext = createContext<ChannelsContextType | null>(null);

export function ChannelsProvider({ children }: { children: React.ReactNode }) {
  const [channelsList, setChannelsList] = useState<Channel[]>([]);

  return (
    <ChannelsContext.Provider value={{ channelsList, setChannelsList }}>
      {children}
    </ChannelsContext.Provider>
  );
}

export function useChannels() {
  const context = useContext(ChannelsContext);
  if (!context) {
    throw new Error("useChannels must be used within a ChannelsProvider");
  }
  return context;
}
