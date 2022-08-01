const express = require('express')
const app = express()
const port = 3000

const auth = require('./routes/auth');

app.use("/auth", auth);

app.get('/', (req, res) => {
  console.log(req);
  // res.send('Hello World!')
  res.json({ msg: "hello world"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})