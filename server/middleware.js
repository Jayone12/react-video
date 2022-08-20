export const corsSet = (req, res, next) => {
  res.setHeader("Access-Control-Allow-origin", "http://localhost:3000");
  next();
};
