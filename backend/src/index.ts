import express from "express";
import cors from "cors";
import photoRoutes from "./routes/photos";

const app = express();

app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api/photos", photoRoutes);

app.listen(4000, "0.0.0.0", () => {
  console.log("Backend running on http://0.0.0.0:4000");
});
