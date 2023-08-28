const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const path = require("path");
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Tempelate engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Middleware function for routs that have "/api/files"
app.use("/api/files", require("./routs/files.js"));
app.use("/files", require("./routs/show.js"));
app.use("/files/download", require("./routs/download.js"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
