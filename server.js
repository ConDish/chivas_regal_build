const path = require("path");
const express = require("express");

const app = express();

app.set("port", process.env.PORT || 4000);
app.use(express.static(`${__dirname}/`));

app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

// --- Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server online on port ${app.get("port")}`);
});
