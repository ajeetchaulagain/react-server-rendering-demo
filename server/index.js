import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";

import { readFileSync } from "fs";
import { App } from "../client/App";

const data = {
  questions: [
    {
      questionId: "Q1",
      content: "Should we use axios or Fetch for AJAX?",
    },
    {
      questionId: "Q2",
      content: "Should we use axios or Fetch for AJAX?",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "axios",
    },
    {
      answerId: "A2",
      questionId: "Q1",
      upvotes: 2,
      content: "axios",
    },
    {
      answerId: "A3",
      questionId: "Q2",
      upvotes: 2,
      content: "axios",
    },
  ],
};
const app = new express();

app.use(express.static("dist"));

app.get("/", async (req, res) => {
  const index = readFileSync(`public/index.html`, `utf8`);
  const rendered = renderToString(<App {...data} />);
  res.send(index.replace("{{rendered}}", rendered));
});

// console.lo("Hello from the outside.")

app.listen(3000, () => {
  console.log("App is listening at PORT- 3000");
});
