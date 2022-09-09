const express = require('express')
const app = express()
const port = 3000

const auth = require('./routes/auth');
const pokemon = require('./routes/pokemon');

app.use(express.json());

app.use("/auth", auth);
app.use("/pokemon", pokemon);

app.get('/', (req, res) => {
  console.log(req);
  // res.send('Hello World!')
  res.json({ msg: "hello world"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})