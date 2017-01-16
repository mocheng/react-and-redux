const express = require('express');
const path = require('path');
const renderPage = require('./routes.Server.js').renderPage;

const app = express();

const assetManifest = require(path.resolve(__dirname, '../build/asset-manifest.json'));

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
  return renderPage(req, res, assetManifest);
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

module.exports = app;
