var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT;

require("./routes/HTML")(app);

express()
  .use(express.static(path.join(__dirname, "client")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
