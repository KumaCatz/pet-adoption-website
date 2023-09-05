const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()

app.use(cors())

app.post('/users', (req, res) => {
  fs.writeFileSync('src/server/db/users.json', 'hey')
  res.send("lol")
})
app.listen(2500, () => {
  console.log('App listening on port 2500')
})