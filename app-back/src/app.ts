import express from "express";
const db = require("./db");

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM "Province"`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// app.get("/api/province", getProvinces);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
