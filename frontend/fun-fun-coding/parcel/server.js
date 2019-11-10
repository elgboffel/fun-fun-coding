const proxy = require("http-proxy-middleware");
const express = require("express");
const bundler = require("./bundler");


const app = express();
const PORT = process.env.PORT || 3000;

const proxyTarget = "http://localhost:53791/";

app.use(
  proxy({
    target: proxyTarget
  })
);

console.log(`Server running at: http://localhost:${PORT}`);

// Pass the Parcel bundler into Express as middleware
app.use(bundler.middleware());

// Run your Express server
app.listen(PORT);

 