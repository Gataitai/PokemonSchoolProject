const express = require('express')
const app = express()
const port = 3000

const auth = require('./routes/auths');
const pokemons = require('./routes/pokemons');

app.use(express.json());

app.use("/auths", auth);
app.use("/pokemons", pokemons);

app.get('/', (req, res) => {
  console.log(req);
  // res.send('Hello World!')
  res.json({ msg: "hello world"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})