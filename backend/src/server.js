const express = require("express");
const app = express();

const cors = require("cors");
const dbConnect = require("../config/db");

const PORT = process.env.PORT || 4000;

// Express config:
app.use(cors()); // for cross origin
app.use(express.json({ extended: false }));
// Routes:
app.use("/api/task", require("./routes/api/task"));

// DB connect:
dbConnect();

app.get("/", (req, res) => {
  res.send("Hello from Express...");
});

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});
