"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ChannelsContextType {
  channelsList: Channel[] | null;
  setChannelsList: (channels: Channel[]) => void;
  selectedStream: Channel | null;
  setSelectedStream: (channel: Channel | null) => void;
}

export const ChannelsContext = createContext<ChannelsContextType | null>(null);

export function ChannelsProvider({ children }: { children: React.ReactNode }) {
  const [channelsList, setChannelsList] = useState<Channel[] | null>(null);
  const [selectedStream, setSelectedStream] = useState<Channel | null>(null);

  // Restore Selected stream
  useEffect(() => {
    const savedStream = sessionStorage.getItem("selectedStream");
    if (savedStream) {
      try {
        setSelectedStream(JSON.parse(savedStream));
      } catch (error) {
        sessionStorage.removeItem("selectedStream");
      }
    }
  }, []);

  // Save Selected stream
  useEffect(() => {
    if (selectedStream) {
      sessionStorage.setItem("selectedStream", JSON.stringify(selectedStream));
    } else {
      sessionStorage.removeItem("selectedStream");
    }
  }, [selectedStream]);

  // Restore Selected channels
  useEffect(() => {
    const savedChannels = sessionStorage.getItem("channelsList");

    if (savedChannels) {
      try {
        setChannelsList(JSON.parse(savedChannels));
      } catch (error) {
        sessionStorage.removeItem("channelsList");
      }
    }
  }, []);

  // Save Selected channels
  useEffect(() => {
    if (channelsList) {
      sessionStorage.setItem("channelsList", JSON.stringify(channelsList));
    } else {
      sessionStorage.removeItem("channelsList");
    }
  }, [channelsList]);

  return (
    <ChannelsContext.Provider
      value={{
        channelsList,
        setChannelsList,
        selectedStream,
        setSelectedStream,
      }}
    >
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
