export const getVideos = (req, res) => {
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
  res.json(videos);
};
