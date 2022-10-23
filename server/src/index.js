const express = require('express')
const app = express()
const port = 3001

const cors = require('cors');

const auth = require('./routes/auths');
const pokemons = require('./routes/pokemons');
const auctions = require('./routes/auctions');
const bids = require('./routes/bids');
const users = require('./routes/users');

app.use(cors());

app.use(express.json());
app.use("/auths", auth);
app.use("/pokemons", pokemons);
app.use("/auctions", auctions);
app.use("/bids", bids);
app.use("/users", users);

app.get('/', (req, res) => {
  console.log(req);
  // res.send('Hello World!')
  res.json({ msg: "hello world"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})