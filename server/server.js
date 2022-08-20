import express from "express";
import { corsSet } from "./middleware";
import videoRouter from "./routers/videoRouters";

const app = express();
const PORT = 4000;

app.use(corsSet);
app.use("/videos", videoRouter);

const handelServer = () => {
  console.log(`✅ ${PORT}서버에 연결 되었습니다.`);
};

app.listen(PORT, handelServer);
