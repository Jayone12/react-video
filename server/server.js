import express from "express";
import cors from "cors";
import morgan from "morgan";
import rootRouter from "./routers/rootRouters";
import videoRouter from "./routers/videoRouters";

const app = express();
const PORT = 4000;
const logger = morgan("dev");
const corsConfig = { origin: "http://localhost:3000", credentials: true };

app.use(cors(corsConfig));
app.use(logger);
app.use("/", rootRouter);
app.use("/videos", videoRouter);

const handelServer = () => {
  console.log(`✅ ${PORT}서버에 연결 되었습니다.`);
};

app.listen(PORT, handelServer);
