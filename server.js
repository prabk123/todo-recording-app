const express = require("express");
var expressStaticGzip = require("express-static-gzip");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use(expressStaticGzip(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, console.log("> Production server started"));
