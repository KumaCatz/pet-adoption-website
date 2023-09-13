const express = require('express')
const cors = require('cors')
const DB = require('./db')
const app = express()
const users = new DB('users')

app.use(cors())
app.use(express.json());
const middleWare = (req, res, next) => {

  next()
}
app.use(middleWare)

app.post('/users/register', (req, res) => {
  const newId = users.addData(req.body)
  res.send({id: newId})
})
app.post('/users/login', (req, res) => {
  users.compareData(req.body, ['email', 'password'])

})
app.get('/users', (req, res, next) => {
  res.send("bitchin")
})

app.use((err, req, res, next) => {
  res.send(err)
})

app.listen(2500, () => {
  console.log('App listening on port 2500')
})