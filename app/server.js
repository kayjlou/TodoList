const express = require("express");
const { join } = require("path");
const app = express();
const connection = require("./config");

app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

connection
  .sync()
  .then(_ => app.listen(3000))
  .catch(e => console.log(e));
