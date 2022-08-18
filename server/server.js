import express from "express";

const app = express();
const PORT = 4000;

app.get("/videos", (req, res) => {
  const videos = [
    {
      id: 0,
      title: "first movie",
      description: "hello world",
      hashtags: ["#moive", "hello", "world", "funny"],
      mete: {
        view: 15,
        like: 42,
        hate: 12,
      },
      owner: "jay",
      comments: [
        {
          id: 0,
          name: "big",
          comment: "nice videos",
        },
        {
          id: 1,
          name: "big",
          comment: "nice videos",
        },
        {
          id: 2,
          name: "big",
          comment: "nice videos",
        },
      ],
    },
    {
      id: 1,
      title: "second movie",
      description: "hello world",
      hashtags: ["#moive", "hello", "world", "funny"],
      mete: {
        view: 15,
        like: 42,
        hate: 12,
      },
      owner: "jay",
      comments: [
        {
          id: 0,
          name: "big",
          comment: "nice videos",
        },
        {
          id: 1,
          name: "big",
          comment: "nice videos",
        },
        {
          id: 2,
          name: "big",
          comment: "nice videos",
        },
      ],
    },
    {
      id: 2,
      title: "third movie",
      description: "hello world",
      hashtags: ["#moive", "hello", "world", "funny"],
      mete: {
        view: 15,
        like: 42,
        hate: 12,
      },
      owner: "jay",
      comments: [
        {
          id: 0,
          name: "big",
          comment: "nice videos",
        },
        {
          id: 1,
          name: "big",
          comment: "nice videos",
        },
        {
          id: 2,
          name: "big",
          comment: "nice videos",
        },
      ],
    },
  ];
  res.setHeader("Access-Control-Allow-origin", "http://localhost:3000");
  res.json(videos);
});

const handelServer = () => {
  console.log(`✅ ${PORT}서버에 연결 되었습니다.`);
};

app.listen(PORT, handelServer);
