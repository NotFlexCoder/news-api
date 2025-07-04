const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/", async (req, res) => {
  const country = req.query.country || "in";
  const apiKey = process.env.API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = app;
