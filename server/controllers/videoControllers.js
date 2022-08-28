import { now } from "mongoose";
import Video from "../models/Video";

export const getVideos = async (req, res) => {
  const videos = await Video.find({});
  return res.json(videos);
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description, hashtags },
    files: { videoFile, thumbnail },
  } = req;
  await Video.create({
    title,
    videoUrl: videoFile[0].path,
    description,
    hashtags,
    thumbnail: thumbnail[0].path,
  });
  return res.redirect("http://localhost:3000/");
};
