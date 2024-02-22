import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import provinceRoutes from "./routes/provinceRoutes";
import accommodationTypeRoutes from "./routes/accommodationTypeRoutes";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/province", provinceRoutes);
app.use("/api/accommodation-type", accommodationTypeRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
