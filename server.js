var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT;

const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "client")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

require("./routes/HTML")(app);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
