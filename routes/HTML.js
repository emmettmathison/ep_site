var path = require("path");

module.exports = function (app) {
  app.get("/listen", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/listen.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/landing.html"));
  });
};
