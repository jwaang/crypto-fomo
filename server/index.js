const express = require("express");
require("./db/mongoose");
const gatsby = require("gatsby-plugin-nodejs");
const itemRouter = require("./routers/item");
const cryptoRouter = require("./routers/crypto");

const app = express();

gatsby.prepare({ app }, () => {
  app.use(express.json());
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(itemRouter);
  app.use(cryptoRouter);
});

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));
