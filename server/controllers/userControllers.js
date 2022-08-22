export const getLogin = (req, res) => {
  res.send("login");
};
export const postLogin = (req, res) => {
  console.log(req.body);
};

export const getJoin = (req, res) => {
  res.send("join");
};
export const postJoin = (req, res) => {
  console.log(req.body);
};
