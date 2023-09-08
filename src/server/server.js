const express = require('express')
const fs = require('fs')
const cors = require('cors')
const DB = require('./db')

const app = express()
const users = new DB('users')

app.use(cors())
app.use(express.json());

app.post('/', (req, res) => {
  const data = users.GET()
  const dataParsed = json.parse(data)
  const newDb = dataParsed.push(req.body)
  fs.writeFileSync('src/server/db/users.json', JSON.stringify(newDb))
  res.send("okay")
})
app.listen(2500, () => {
  console.log('App listening on port 2500')
})