const Bundler = require("parcel-bundler");
const Path = require("path");


const isProd = process.env.NODE_ENV === "production";

const entryFiles = [
    Path.join(__dirname, "../src/js/index.ts")    
];

// For more options look at https://parceljs.org/api.html
let options

if (isProd) {

  options = {
    minify: true,
    http: true,
    watch: false
  }
} else {

  options = {
    cache: true,
    minify: false,
    sourceMaps: true,
    watch: true
  }
};

const defaultOption = {
  outDir: "../../backend/src/FunFunCoding.Web/wwwroot",
  publicUrl: "/",
  detailReport: true,
  cache: true,
  minify: true,
  sourceMaps: true,
  http: true
};

const bundler = new Bundler(entryFiles, {...defaultOption, ...options});

module.exports = bundler;