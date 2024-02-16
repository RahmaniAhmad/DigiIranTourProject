import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.get("/api/province", async (req, res) => {
  try {
    const filter = req.query.filter;
    const page = req.query.page ? parseInt(req.query.page as string) : 1;

    let resultPromise;
    let countPromise;

    if (filter !== undefined) {
      resultPromise = db.query(
        `SELECT * FROM "Province" WHERE "Name" LIKE '${filter}%' LIMIT 2 OFFSET ${
          (page - 1) * 2
        }`
      );
      countPromise = db.query(
        `SELECT count(*) as "rowsCount" from "Province" WHERE "Name" LIKE '${filter}%'`
      );
    } else {
      resultPromise = db.query(
        `SELECT * FROM "Province" LIMIT 2 OFFSET ${(page - 1) * 2}`
      );
      countPromise = db.query(`SELECT count(*) as "rowsCount" from "Province"`);
    }

    const [result, count] = await Promise.all([resultPromise, countPromise]);

    res.json({
      data: result.rows,
      rowsCount: Math.ceil(count.rows[0].rowsCount / 2),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/province/:id", async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM "Province" WHERE "Id"=${id}`;
  const result = await db.query(query);

  res.json(result.rows[0]);
});

app.post("/api/province", async (req, res) => {
  const data = req.body;
  const query = 'INSERT INTO "Province" ("Name") VALUES ($1) RETURNING *';
  const values = [data.name];

  const result = await db.query(query, values);

  res.json({ message: "Data inserted successfully", data: result.rows[0] });
});

app.delete("/api/province/:id", async (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM "Province" WHERE "Id"=${id}`;
  const result = await db.query(query);

  res.json({ message: "Data deleted successfully", data: result.rows[0] });
});

app.use(cors);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
