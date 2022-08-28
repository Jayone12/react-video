import { useEffect, useState } from "react";
import styled from "styled-components";
import { IVideos } from "../types";
import diffTime from "../utils/diffTime";

const VideoListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const VideoThumbnail = styled.div`
  height: 150px;
  background-color: tomato;
`;

const VideoTitle = styled.h3``;

const VideoUserInfo = styled.div`
  span:not(span:first-child) {
    margin-left: 10px;
  }
`;
const VideoOwner = styled.span``;
const VideoView = styled.span``;
const VideoCreateTime = styled.span``;

function Videos() {
  const [videos, setVideos] = useState<IVideos[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/videos")
      .then((response) => response.json())
      .then((videos) => setVideos(videos));
  }, []);
  console.log(videos);
  return (
    <VideoListContainer>
      {videos?.map((video) => (
        <li key={video._id}>
          <VideoThumbnail></VideoThumbnail>
          <VideoTitle>{video.title}</VideoTitle>
          <VideoUserInfo>
            <VideoOwner>{video.owner}</VideoOwner>
            <VideoView>조회수: {video.meta.view}</VideoView>
          </VideoUserInfo>
          <VideoCreateTime>{diffTime(video.createdAt)}</VideoCreateTime>
        </li>
      ))}
    </VideoListContainer>
  );
}
export default Videos;
