import express from "express";

const app = express();

app.listen(4000, () => {
  console.log("listening on port 4000!");
});

app.get("/", (_, res) => {
  res.send("hello there");
});
