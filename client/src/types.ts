interface IVideoMeta {
  view: number;
  like: number;
  hate: number;
}

interface IVideoComments {
  id: number;
  name: string;
  comment: string;
}

export interface IVideos {
  _id: number;
  title: string;
  description: string;
  createdAt: number;
  thumbnail: string;
  hashtags: string[];
  meta: IVideoMeta;
  owner: string;
  comments: IVideoComments[];
}
