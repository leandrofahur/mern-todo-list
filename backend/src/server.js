const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from express...");
});

app.listen(PORT, () => {
  console.log(`Server um and running on port: ${PORT}`);
});
