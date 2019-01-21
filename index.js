const express = require('express');
const app = express();
const template = require('./views/template');
const path = require('path');


// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));


// app.get('/',(req,res) => {
//     res.json({done:true});
// });


//SSR function import
const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
  const { content } = ssr()
  const response = template("Server Rendered Page", content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

app.listen(3001);
console.log('server start on 3001 port');