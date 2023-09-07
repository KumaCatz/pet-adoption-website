const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body)
  fs.writeFileSync('src/server/db/users.json', JSON.stringify(req.body))
  res.send("okay")
})
app.listen(2500, () => {
  console.log('App listening on port 2500')
})