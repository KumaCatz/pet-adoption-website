const express = require('express')
const DB = require('../db')
const { ERR, ERR_EMAIL_OR_PASSWORD } = require('../utils/errors')
const users = new DB('users')

module.exports = {
  loginUser: async (req, res, next) => {
    try{
      const user = users.getDataByPar(req.body, 'email')
      if(!user) {
        return next(ERR_EMAIL_OR_PASSWORD)
      }
      const password = users.compareData(req.body, 'password')
      if(!password) {
        return next(ERR_EMAIL_OR_PASSWORD)
      }
      delete user.password

      res.send(user)
    } catch (error) {
      return next(ERR)
    }
  },
  registerUser: (req, res) => {
    const newId = users.addData(req.body)
    res.send({id: newId})
  }
}