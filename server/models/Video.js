import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  hashtags: [{ type: String, trim: true }],
  createdAt: { type: Date, required: true, default: Date.now },
  thumbnail: { type: String, required: true },
  meta: {
    view: { type: Number, default: 0, required: true },
    like: { type: Number, default: 0, required: true },
    hate: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
