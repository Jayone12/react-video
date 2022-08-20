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
  id: number;
  title: string;
  description: string;
  createAt: number;
  thumbnail: string;
  hashtags: string[];
  meta: IVideoMeta;
  owner: string;
  comments: IVideoComments[];
}
