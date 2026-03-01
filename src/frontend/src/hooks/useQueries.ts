import { useQuery } from "@tanstack/react-query";
import type { ChannelInfo, Video } from "../backend.d";
import { useActor } from "./useActor";

export function useChannelInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<ChannelInfo>({
    queryKey: ["channelInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "hehehe222k",
          bio: "🎮 Welcome to my channel!\nI create Free Fire gameplay videos with normal and simple editing. Here you'll find fun matches, cool moments, and entertaining clips.\nIf you like Free Fire, please support the channel and make sure to subscribe!",
          subscribeUrl: "https://youtube.com/@hehehe222k",
        };
      }
      return actor.getChannelInfo();
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useContactEmail() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: ["contactEmail"],
    queryFn: async () => {
      if (!actor) return "ankittoppo093@gmail.com";
      return actor.getContactEmail();
    },
    enabled: !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useVideos() {
  const { actor, isFetching } = useActor();
  return useQuery<Video[]>({
    queryKey: ["videos"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getVideos();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 2,
  });
}
