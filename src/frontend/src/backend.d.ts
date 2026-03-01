import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Video {
    title: string;
    thumbnailUrl: string;
    description: string;
    viewCount: bigint;
    uploadDate: Time;
}
export interface ChannelInfo {
    bio: string;
    subscribeUrl: string;
    name: string;
}
export type Time = bigint;
export interface backendInterface {
    addVideo(title: string, description: string, thumbnailUrl: string, uploadDate: Time): Promise<void>;
    getChannelInfo(): Promise<ChannelInfo>;
    getContactEmail(): Promise<string>;
    getVideos(): Promise<Array<Video>>;
}
