const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let counter = 0;

app.get("/count", (req, res) => {
  res.json({ count: counter });
});

app.post("/inc", (req, res) => {
  counter++;
  res.json({ count: counter });
});

app.listen(4000, () => console.log("API running on 4000"));
