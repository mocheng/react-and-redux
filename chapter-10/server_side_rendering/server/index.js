const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});
