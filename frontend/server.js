const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to backend" });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("Frontend running on port 3000"));
