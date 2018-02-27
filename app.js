import express from 'express';
import fetch from 'isomorphic-fetch';
import fs from 'fs';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', '86400');
  next();
});


app.get('/node/api/klistcond1', (req, res) => { 
  res.sendFile(__dirname + '/hoge.json');
  // const text = fs.readFileSync(__dirname + '/hoge.txt');
  // console.log(text)
  // res.send(text);
  // fetch(`http://dev.local.shopping.wowma.jp:8080/category/51`)
  // .then((response) => {
  //   if (response.status >= 400) {
  //     res.json({result:'error'})
  //     throw new Error("Bad response from server");
  //   }
  //   return response.text();
  // })
  // .then((text) => {
  //   console.log(json);
  //   res.json({});
  // });
});
  // fetch(`https://stage3.shopping.wowma.jp${req.originalUrl}`)


app.get('/', (req, res) => { 
  res.json({hoge: 'hoge'});
});


app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});