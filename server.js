const express = require('express');
const app = express();

app.use(express.static(__dirname));

const server = app.listen(9000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('app listening at http://%s%s', host, port);
})