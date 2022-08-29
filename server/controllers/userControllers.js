import User from "../models/User";

export const getLogin = (req, res) => {
  res.send("login");
};
export const postLogin = async (req, res) => {
  console.log(req.body);
};

export const getJoin = (req, res) => {
  res.send("join");
};
export const postJoin = async (req, res) => {
  const {
    body: { email, username, password, passwordConfirm },
    file: { path },
  } = req;
  if (password !== passwordConfirm) {
    return res.status(400);
  }
  await User.create({
    email,
    username,
    password,
    profileUrl: path,
  });
  return res.redirect("http://localhost:3000/login");
};
