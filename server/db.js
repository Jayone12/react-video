import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ DB가 연결되었습니다.");
const handleError = (error) => console.log("❌ DB error 발생", error);

db.on("error", handleError);
db.once("open", handleOpen);
