export interface VideoModel {
  id: number;
  channelName: string;
  uri: string;
  caption: string;
  musicName: string;
  likes: number;
  comments: number;
  avatarUri: string;
}

export interface VideoData {
  avatarUri: string;
  caption: string;
  channelName: string;
  comments: number;
  id: number;
  likes: number;
  musicName: string;
  uri: string;
}
